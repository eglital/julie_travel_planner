const Itinerary = require("../models").Itinerary;

function initialFourSquareRequest(InitialRequestObject) {
  const sanitizedRequest = sanitizeRequestObject(InitialRequestObject);
  const categories = ["food", "outdoors", "arts"];
  const apiStrings = categories.map(category =>
    fourSquareStringBuilder(category, sanitizedRequest)
  );
  const requestArray = apiStrings.map(requestString => fetch(requestString));

  return Promise.all(requestArray)
    .then(response => {
      let jsonData = response.map(activityType => activityType.json());
      return Promise.all(jsonData);
    })
    .then(data => {
      let fullListOfChoices = buildListOfChoices(data);
      const itinerary = createItinary(InitialRequestObject);

      const initialResponseObject = {};
      initialResponseObject.food = fullListOfChoices[0];
      initialResponseObject.places = fullListOfChoices[1];
      initialResponseObject.sights = fullListOfChoices[2];
      initialResponseObject.itineraryId = itinerary.id;
      return initialResponseObject;
    })
    .catch(err => {
      console.log("This is an error", err);
      throw new Error(err);
    });
}

function spontaneousFourSquareRequest() {
  //
}
/////////////////////////////////////////////
//private functions
/////////////////////////////////////////////

function sanitizeRequestObject(requestObject) {
  requestObject.startTime = new Date(Number(requestObject.startTime));
  requestObject.endTime = new Date(Number(requestObject.endTime));
  requestObject.lat = Number(requestObject.startingLocation[0]);
  requestObject.lng = Number(requestObject.startingLocation[1]);
  return requestObject;
}

function fourSquareStringBuilder(category, iro) {
  const clientId = process.env.CLIENT_ID;
  const secret = process.env.CLIENT_SECRET;
  return `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=${iro.lat},${iro.lng}&radius=15000&venuePhotos=1&section=${category}&client_id=${clientId}&client_secret=${secret}`;
}

function buildListOfChoices(data) {
  if (typeof data[0] !== "object") {
    throw new Error("the data must be an array of arrays");
  }
  const tempPhoto = [
    "https://s-media-cache-ak0.pinimg.com/736x/9c/b7/33/9cb733a13a4e4260346c80b7de3c6223.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg",
    "http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg"
  ];
  const completeDict = {};
  return data.map((activityType, index) => {
    data = activityType.response.groups[0].items;

    let array = [];
    data.forEach(item => {
      if (
        !completeDict[item.venue.name] &&
        notGym(item.venue.categories[0].name) &&
        notGym(item.venue.name)
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
        }
        if (item.venue.photos.count) {
          let prefix = item.venue.photos.groups[0].items[0].prefix;
          let suffix = item.venue.photos.groups[0].items[0].suffix;
          locationObject.photo = prefix + "original" + suffix;
        }
        if (!locationObject.photo) {
          locationObject.photo = tempPhoto[index];
        }
        if (item.venue.hours) {
          locationObject.isOpen = item.venue.hours.isOpen;
          locationObject.hours = item.venue.hours.status;
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
    data: [
      {
        arrivalTime: null,
        departureTime: InitialRequestObject.startTime,
        lat: InitialRequestObject.lat,
        lng: InitialRequestObject.lng
      }
    ]
  }).save();
}

function notGym(category) {
  let regex = /dojo|fitness|fittness/gi;
  return !regex.test(category);
}

module.exports = {
  initialFourSquareRequest,
  fourSquareStringBuilder,
  buildListOfChoices,
  createItinary
};
