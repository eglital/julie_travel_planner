const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: require("q").Promise
});

router.get("/itinerary/select", (req, res) => {
  const { location, itineraryId } = req.body;
  console.log("checking distance");
  let destinations = [location.lat, location.long];
  let origins, departure_time;
  Itinerary.findById(itineraryId).then(itinerary => {
    departure_time = itinerary.data[0].departureTime;
    origins = [itinerary.data[0].lat, itinerary.data[0].long];
    googleMapsClient
      .distanceMatrix({
        origins: [origins],
        destinations: [destinations],
        mode: "driving",
        departure_time,
        units: "imperial"
      })
      .asPromise()
      .then(response => {
        res.send(response.json.rows[0].elements[0].duration);
      })
      .catch(err => {
        res.send(err.json.error_message);
      });
  });
});

module.exports = router;
