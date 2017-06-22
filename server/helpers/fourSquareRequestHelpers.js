const Itinerary = require('../models').Itinerary;
const { hashId } = require('./hashItineraryId');
const moment = require('moment');

function initialFourSquareRequest(InitialRequestObject, next) {
  console.log(InitialRequestObject);
  setUpPrefs(InitialRequestObject);
  sanitizeRequestObject(InitialRequestObject);
  const apiStrings = InitialRequestObject.categories.map(category => {
    return fourSquareStringBuilder(category, InitialRequestObject);
  });
  const requestArray = apiStrings.map(requestString => fetch(requestString));

  return Promise.all(requestArray)
    .then(response => {
      let jsonData = response.map(activityType => activityType.json());
      return Promise.all(jsonData);
    })
    .then(data => {
      let fullListOfChoices = buildListOfChoices(data);
      const itinerary = createItinary(InitialRequestObject);

      for (let i = 3; i < fullListOfChoices.length; i++) {
        if (i % 2 !== 0) {
          fullListOfChoices[1] = fullListOfChoices[1].concat(
            fullListOfChoices[i]
          );
        } else {
          fullListOfChoices[2] = fullListOfChoices[2].concat(
            fullListOfChoices[i]
          );
        }
      }
      if (!InitialRequestObject.includeMeals) {
        fullListOfChoices[0] = [];
      }
      const initialResponseObject = {
        locations: {
          food: fullListOfChoices[0] || [],
          places: fullListOfChoices[1] || [],
          sights: fullListOfChoices[2] || []
        },
        itinerary: {
          id: hashId(itinerary.id),
          startTime: itinerary.startTime,
          endTime: itinerary.endTime,
          duration: 0
        }
      };
      itinerary.save();
      return initialResponseObject;
    })
    .catch(next);
}

/////////////////////////////////////////////
//private functions
/////////////////////////////////////////////

function setUpPrefs(requestObject) {
  requestObject.categories = requestObject.preferences;
  if (!requestObject.categories) {
    requestObject.categories = ['food', 'outdoors', 'arts'];
  } else {
    requestObject.categories.unshift('food');
  }

  // walking or driving
  if (requestObject.transportationMode === 'walking') {
    requestObject.radius = 1500;
  } else {
    requestObject.radius = 15000;
  }
}

function sanitizeRequestObject(requestObject) {
  // requestObject.transportationMode = requestObject.transportationMode.toString();
  requestObject.startTime = new Number(requestObject.startTime);
  requestObject.endTime = new Number(requestObject.endTime);
  requestObject.lat = Number(requestObject.startingLocation[0]);
  requestObject.lng = Number(requestObject.startingLocation[1]);
  return requestObject;
}

function fourSquareStringBuilder(category, iro) {
  const clientId = process.env.CLIENT_ID;
  const secret = process.env.CLIENT_SECRET;
  return `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=${iro.lat},${iro.lng}&radius=${iro.radius}&venuePhotos=1&limit=35&section=${category}&client_id=${clientId}&client_secret=${secret}`;
}

function buildListOfChoices(data) {
  if (typeof data[0] !== 'object') {
    throw new Error('the data must be an array of arrays');
  }
  const tempPhoto = [
    'https://s-media-cache-ak0.pinimg.com/736x/9c/b7/33/9cb733a13a4e4260346c80b7de3c6223.jpg',
    'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg',
    'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
  ];
  const completeDict = {};
  return data.map((activityType, index) => {
    data = activityType.response.groups[0].items;

    let array = [];
    data.forEach(item => {
      if (
        !completeDict[item.venue.name] &&
        notGym(item.venue.categories[0].name) &&
        notGym(item.venue.name) &&
        notFoodInWrongPlaces(item.venue.categories[0].name, index)
      ) {
        const locationObject = {};
        locationObject.name = item.venue.name;
        locationObject.link = `http://foursquare.com/v/${item.venue.id}?ref= ${process.env.CLIENT_ID}`;
        locationObject.address = item.venue.location.address;
        locationObject.lat = item.venue.location.lat;
        locationObject.lng = item.venue.location.lng;
        locationObject.category = item.venue.categories[0].name;
        if (item.tips !== undefined) {
          locationObject.tip = item.tips[0].text;
          locationObject.photo = item.tips[0].photourl;
        } else {
          locationObject.tip = 'No additional information available.';
        }
        if (item.venue.photos.count) {
          let prefix = item.venue.photos.groups[0].items[0].prefix;
          let suffix = item.venue.photos.groups[0].items[0].suffix;
          locationObject.photo = prefix + 'original' + suffix;
        }
        if (!locationObject.photo) {
          locationObject.photo = tempPhoto[index];
        }
        if (item.venue.hours) {
          const hours = parseHours(item.venue.hours.status);
          locationObject.isOpen = item.venue.hours.isOpen;
          locationObject.hours = hours;
        }
        completeDict[item.venue.name] = true;
        array.push(locationObject);
      }
    });
    return array;
  });
}

function createItinary(InitialRequestObject) {
  return new Itinerary({
    startTime: InitialRequestObject.startTime,
    endTime: InitialRequestObject.endTime,
    transportationMode: InitialRequestObject.transportationMode,
    data: [
      {
        arrivalTime: null,
        departureTime: InitialRequestObject.startTime,
        lat: InitialRequestObject.lat,
        lng: InitialRequestObject.lng
      }
    ]
  });
}

function notGym(category) {
  let regex = /dojo|fitness|fittness/gi;
  return !regex.test(category);
}

function notFoodInWrongPlaces(name, index) {
  if (index === 0) {
    return true;
  } else if (
    /bar|restaurant|kitchen|grill|buffet|sandwich|steak|walmart|pub|brewery|warehouse|big\sbox\sstore|grocrey/gi.test(
      name
    )
  ) {
    return false;
  } else {
    return true;
  }
}

function parseHours(status) {
  let hours = {};
  if (/\bopen\b.*?\b[0-9].*/gi.test(status)) {
    const arr = status.split(' ');
    hours.close = moment(arr[2] + arr[3], 'HH:mm').toDate().getTime();
  }
  if (status && status.split(' ').length > 4) {
    hours.open = null;
  } else if (/[0-9]/gi.test(status) && /close/gi.test(status)) {
    const arr = status.split(' ');
    hours.open = moment(arr[2] + arr[3], 'HH:mm').toDate().getTime();
  }

  return hours;
}

module.exports = {
  initialFourSquareRequest,
  fourSquareStringBuilder,
  buildListOfChoices,
  createItinary
};
