const express = require("express");
const router = express.Router();
const moment = require("moment");
const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: require("q").Promise
});

//in seconds
const timeInSections = {
  food: 3600,
  places: (Math.floor(Math.random() * 2) + 2) * 3600,
  sights: (Math.floor(Math.random() * 2) + 2) * 3600
};

router.put("/itinerary/select", (req, res) => {
  // need to get this from FE
  const { location, itineraryId, section } = req.body;
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
        //duration value in seconds
        let responseDuration = response.json.rows[0].elements[0].duration.value;
        let newArrivalTime = moment(
          itinerary.data[itinerary.data.length - 1].departureTime
        ).add(responseDuration, "s");
        let randomDuration = timeInSections[section];
        let newDepartureTime = moment(newArrivalTime).add(randomDuration, "s");
        let newLocation = location;

        location.arrivalTime = newArrivalTime;
        location.departureTime = newDepartureTime;
        //in miliseconds
        let newDuration =
          itinerary.duration + responseDuration * 1000 + randomDuration * 1000;
        Itinerary.findByIdAndUpdate(itineraryId, {
          data: [...data, newLocation],
          duration: newDuration
        });
        res.send({ combinedDuration: newDuration });
      })
      .catch(err => {
        res.send(err.json.error_message);
      });
  });
});

module.exports = router;
