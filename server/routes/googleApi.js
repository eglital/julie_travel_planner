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
    //fake itinerary for testing
    // let itinerary = {
    //   _id: "593ef8f85c8cca5f50b1c8eb",
    //   startTime: "2017-07-12T14:00:00Z",
    //   endTime: "2017-07-13T02:00:00Z",
    //   data: [
    //     {
    //       departureTime: "2017-07-12T14:00:00Z",
    //       arrivalTime: null,
    //       long: -87.636393,
    //       lat: 41.878112
    //     }
    //   ],
    //   duration: 0,
    //   __v: 0
    // };
    //departure_time doesn't work (wrong format)
    departure_time = itinerary.data[0].departureTime;
    origins = [itinerary.data[0].lat, itinerary.data[0].long];
    googleMapsClient
      .distanceMatrix({
        origins: [origins],
        destinations: [destinations],
        mode: "driving",
        // departure_time,
        units: "imperial"
      })
      .asPromise()
      .then(response => {
        //duration value in seconds
        let responseDuration = response.json.rows[0].elements[0].duration.value;
        let newArrivalTime = moment(
          itinerary.data[itinerary.data.length - 1].departureTime
        )
          .add(responseDuration, "s")
          .format();
        let randomDuration = timeInSections[section];
        let newDepartureTime = moment(newArrivalTime)
          .add(randomDuration, "s")
          .format();
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
