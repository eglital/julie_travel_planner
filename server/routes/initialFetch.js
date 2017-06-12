const express = require("express");
const router = express.Router();
const Itinerary = require("../models").Itinerary;

router.get("/", (req, res, next) => {
  const clientId = process.env.CLIENT_ID;
  const secret = process.env.CLIENT_SECRET;
  const food = `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=41.878114%2C%20-87.629798&radius=15000&section=food&limit=50&client_id=${clientId}&client_secret=${secret}`;
  const sights = `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=41.878114%2C%20-87.629798&radius=15000&section=sights&limit=50&client_id=${clientId}&client_secret=${secret}`;

  const topPicks = `https://api.foursquare.com/v2/venues/explore?v=20131016&ll=41.878114%2C%20-87.629798&radius=15000&section=topPicks&limit=50&client_id=${clientId}&client_secret=${secret}`;

  const getFood = fetch(food);
  const getSights = fetch(sights);
  const getTopPicks = fetch(topPicks);

  Promise.all([getFood, getSights, getTopPicks])
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
          locationObject.tip = item.tips[0].text;
          locationObject.photo = item.tips[0].photourl;
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
        start_time: tempStartTime
      });

      const initialResponseObject = {};
      initialResponseObject.food = fullListOfChoices[0];
      initialResponseObject.places = fullListOfChoices[1];
      initialResponseObject.sights = fullListOfChoices[2];
      initialResponseObject.itineraryId = itinerary.id;

      res.send(initialResponseObject);
    })
    .catch(next);
});

module.exports = router;
