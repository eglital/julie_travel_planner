const express = require("express");
const router = express.Router();

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: require("q").Promise
});

router.get("/itinerary/select", (req, res, next) => {
  // const { location, itineraryId } = req.body;
  console.log("checking distance");

  googleMapsClient
    .distanceMatrix({
      origins: [[44.096866, -70.168594]],
      destinations: [[44.107652, -70.202036]],
      language: "en",
      units: "metric",
      region: "au"
    })
    .asPromise()
    .then(response => {
      res.send(response.json);
    })
    .catch(err => {
      res.send(err.json);
    });
});

module.exports = router;
