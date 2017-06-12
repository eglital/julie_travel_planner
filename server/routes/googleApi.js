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

router.put("/itinerary/select", (req, res, next) => {
  // need to get this from FE
  const { location, itineraryId, section } = req.body;
  console.log("checking distance");
  let destinations = [location.lat, location.long];
  let origins, departure_time;

  Itinerary.findById(itineraryId)
    .then(itinerary => {
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
      departure_time = itinerary.data[itinerary.data.length - 1].departureTime;
      origins = [
        itinerary.data[itinerary.data.length - 1].lat,
        itinerary.data[itinerary.data.length - 1].long
      ];
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
          let responseDuration =
            response.json.rows[0].elements[0].duration.value;
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

          newLocation.arrivalTime = newArrivalTime;
          newLocation.departureTime = newDepartureTime;
          //in miliseconds
          let newDuration =
            itinerary.duration +
            responseDuration * 1000 +
            randomDuration * 1000;
          Itinerary.findByIdAndUpdate(itineraryId, {
            data: [...data, newLocation],
            duration: newDuration
          });
          res.send({ duration: newDuration });
        })
        .catch(err => {
          res.send(err.json.error_message);
        });
    })
    .catch(next);
});

router.get("/itinerary/final/:itineraryId", (req, res, next) => {
  console.log("getting final location");
  let itineraryId = req.params.itineraryId;
  let destinations, origins, departure_time, itinerary;
  Itinerary.findById(itineraryId)
    .then(itinerary => {
      //fake itinerary for testing
      // itinerary = {
      //   _id: "593ef8f85c8cca5f50b1c8eb",
      //   startTime: "2017-07-12T14:00:00Z",
      //   endTime: "2017-07-13T02:00:00Z",
      //   data: [
      //     {
      //       departureTime: "2017-07-12T14:00:00Z",
      //       arrivalTime: null,
      //       long: -87.636393,
      //       lat: 41.878112
      //     },
      //     {
      //       name: "Revival Food Hall",
      //       address: "125 S Clark St",
      //       lat: 41.8797704672721,
      //       long: -87.63060092926025,
      //       category: "Food Court",
      //       tip: "The chef-driven food hall has a kiosk where Mindy Segal's staff serve her famous hot chocolate that includes the all-important homemade marshmallows. Get it to go.",
      //       isOpen: true,
      //       hours: "Open until 7:00 PM",
      //       arrivalTime: "2017-07-12T15:00:00Z",
      //       departureTime: "2017-07-12T16:00:00Z"
      //     }
      //   ],
      //   duration: 1000000,
      //   __v: 0
      // };
      //departure_time doesn't work (wrong format)
      departure_time = itinerary.data[itinerary.data.length - 1].departureTime;
      origins = [
        itinerary.data[itinerary.data.length - 1].lat,
        itinerary.data[itinerary.data.length - 1].long
      ];
      destinations = [itinerary.data[0].lat, itinerary.data[0].long];
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
          let responseDuration =
            response.json.rows[0].elements[0].duration.value;

          let newArrivalTime = moment(
            itinerary.data[itinerary.data.length - 1].departureTime
          )
            .add(responseDuration, "s")
            .format();

          let newDepartureTime = null;
          let newLocation = itinerary.data[0];
          newLocation.arrivalTime = newArrivalTime;
          newLocation.departureTime = newDepartureTime;
          //in miliseconds
          let newDuration =
            itinerary.duration +
            responseDuration * 1000 +
            randomDuration * 1000;
          Itinerary.findByIdAndUpdate(itineraryId, {
            data: [...data, newLocation],
            duration: newDuration
          });
          res.send({ itinerary: itinerary.data });
        })
        .catch(err => {
          res.send(err.json.error_message);
        });
    })
    .catch(next);
});
module.exports = router;
