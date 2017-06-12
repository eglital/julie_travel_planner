const Itinerary = require("../models").Itinerary;

function fourSquareStringBuilder(category, iro) {
  const clientId = process.env.CLIENT_ID;
  const secret = process.env.CLIENT_SECRET;

  return `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=${iro.lat},${iro.lng}&radius=15000&section=${category}&client_id=${clientId}&client_secret=${secret}`;
}

function initialFourSquareRequest(InitialRequestObject) {
  const categories = ["food", "sights", "topPicks"];
  const apiStrings = categories.map(category => {
    return fourSquareStringBuilder(category, InitialRequestObject);
  });

  const getFood = fetch(apiStrings[0]);
  const getSights = fetch(apiStrings[1]);
  const getTopPicks = fetch(apiStrings[2]);

  return Promise.all([getFood, getSights, getTopPicks])
    .then(response => {
      let jsonData = [];
      response.forEach((activityType, index) => {
        jsonData[index] = activityType.json();
      });
      return Promise.all(jsonData);
    })
    .then(data => {
      let fullListOfChoices = data.map(activityType => {
        data = activityType.response.groups[0].items;
        let array = data.map(item => {
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

          if (item.venue.hours) {
            locationObject.isOpen = item.venue.hours.isOpen;
            locationObject.hours = item.venue.hours.status;
            return locationObject;
          }
        });
        return array;
      });
      const tempStartTime = Date.now();
      const itinerary = new Itinerary({
        startTime: tempStartTime
      });

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

module.exports = { initialFourSquareRequest };
