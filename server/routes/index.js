const express = require("express");
const router = express.Router();
const moment = require("moment");
const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");
const {
  googleMapsClient,
  selectingItinerary
} = require("../helpers/googleApiHelpers");

const {
  initialFourSquareRequest,
  spontaneousFourSquareRequest
} = require("../helpers/fourSquareRequestHelpers");

router.post("/itinerary/start", (req, res, next) => {
  initialFourSquareRequest(req.body.formSubmission, next)
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

//in seconds
const timeInSections = {
  food: 3600,
  places: (Math.floor(Math.random() * 2) + 2) * 3600,
  sights: (Math.floor(Math.random() * 2) + 2) * 3600
};

router.put("/itinerary/select", (req, res, next) => {
  // need to get this from FE
  console.log("checking distance");
  const { location, itineraryId, section } = req.body;
  selectingItinerary({
    location,
    itineraryId,
    section,
    res,
    next
  }).then(itinerary => res.send({ duration: itinerary.duration }));
});

router.get("/itinerary/final/:itineraryId", (req, res, next) => {
  console.log("getting final location");
  let itineraryId = req.params.itineraryId;
  let destinations, origins, departure_time, itinerary;
  Itinerary.findById(itineraryId)
    .then(itinerary => {
      itinerary = itinerary;
      departure_time = new Date(
        itinerary.data[itinerary.data.length - 1].departureTime
      );

      origins = [
        itinerary.data[itinerary.data.length - 1].lat,
        itinerary.data[itinerary.data.length - 1].lng
      ];

      destinations = [itinerary.data[0].lat, itinerary.data[0].lng];

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
          let newDuration = itinerary.duration + responseDuration * 1000;

          Itinerary.findByIdAndUpdate(
            itinerary._id,
            {
              $push: { data: newLocation },
              duration: newDuration
            },
            { new: true }
          ).then(itinerary => {
            res.send({ itinerary: itinerary.data });
          });
        })
        .catch(err => {
          res.send(err.json.error_message);
        });
    })
    .catch(next);
});

router.get("/itinerary/saved/:itineraryId", (req, res, next) => {
  Itinerary.findById(req.params.itineraryId)
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(next);
});

router.get("/spontaneous", (req, res, next) => {
  spontaneousFourSquareRequest()
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

module.exports = router;
