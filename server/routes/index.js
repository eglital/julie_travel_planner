const express = require("express");
const router = express.Router();
const moment = require("moment");
const mongoose = require("mongoose");
const models = require("./../models");
const { hashId, checkHash } = require("../helpers/hashItineraryId");

const Itinerary = mongoose.model("Itinerary");
const {
  googleMapsClient,
  selectingItinerary,
  finishingItinerary,
  addItineraryToUser
} = require("../helpers/googleApiHelpers");

const {
  initialFourSquareRequest,
  spontaneousFourSquareRequest
} = require("../helpers/fourSquareRequestHelpers");

router.post("/itinerary/start", (req, res, next) => {
  console.log("starting itinerary");
  initialFourSquareRequest(req.body.formSubmission, next)
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

router.put("/itinerary/select", (req, res, next) => {
  console.log("checking distance");
  let { location, itineraryId, section } = req.body;
  itineraryId = checkHash(itineraryId);
  itineraryId = mongoose.Types.ObjectId(itineraryId);
  selectingItinerary({
    location,
    itineraryId,
    section,
    res
  })
    .then(itinerary => res.send({ duration: itinerary.duration }))
    .catch(next);
});

router.get("/itinerary/final/:itineraryId", (req, res, next) => {
  console.log("setting final location");
  let itineraryId = checkHash(req.params.itineraryId);
  let facebookjwt = req.query.facebookjwt;
  itineraryId = mongoose.Types.ObjectId(itineraryId);
  addItineraryToUser({ facebookjwt, itineraryId })
    .then(() =>
      finishingItinerary({ itineraryId, res }).then(itinerary =>
        res.send({ itinerary })
      )
    )
    .catch(next);
});

router.get("/itinerary/saved/:itineraryId", (req, res, next) => {
  console.log("getting saved itinerary");
  let itineraryId = checkHash(req.params.itineraryId);
  Itinerary.findById(itineraryId)
    .then(itinerary => {
      res.send({ itinerary });
    })
    .catch(next);
});

module.exports = router;
