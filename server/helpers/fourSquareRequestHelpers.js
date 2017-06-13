const Itinerary = require("../models").Itinerary;

function initialFourSquareRequest(InitialRequestObject) {
  InitialRequestObject.startTime = new Date(
    Number(InitialRequestObject.startTime)
  );
  InitialRequestObject.endTime = new Date(Number(InitialRequestObject.endTime));
  InitialRequestObject.lat = Number(InitialRequestObject.startingLocation[0]);
  InitialRequestObject.lng = Number(InitialRequestObject.startingLocation[1]);
  const categories = ["food", "outdoors", "arts"];
  const apiStrings = categories.map(category => {
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

      const initialResponseObject = {};
      initialResponseObject.food = fullListOfChoices[0];
      initialResponseObject.places = fullListOfChoices[1];
      initialResponseObject.sights = fullListOfChoices[2];
      initialResponseObject.itineraryId = itinerary.id;
      return initialResponseObject;
    })
    .catch(err => {
      throw new Error(err);
    });
}

/////////////////////////////////////////////
//private functions
/////////////////////////////////////////////

function fourSquareStringBuilder(category, iro) {
  const clientId = process.env.CLIENT_ID;
  const secret = process.env.CLIENT_SECRET;
  return `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=${iro.lat},${iro.lng}&radius=15000&venuePhotos=1&section=${category}&client_id=${clientId}&client_secret=${secret}`;
}

function buildListOfChoices(data) {
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
      if (!completeDict[item.venue.name]) {
        const locationObject = {};
        locationObject.name = item.venue.name;
        locationObject.address = item.venue.location.address;
        locationObject.lat = item.venue.location.lat;
        locationObject.long = item.venue.location.lng;
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
  });
}

module.exports = {
  initialFourSquareRequest,
  fourSquareStringBuilder,
  buildListOfChoices,
  createItinary
};
