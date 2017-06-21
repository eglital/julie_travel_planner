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

// app.post("/api/auth", function(req, res) {
//   var network = req.body.network;
//   var socialToken = req.body.socialToken;
//   validateWithProvider(network, socialToken)
//     .then(function(profile) {
//       // Return a server signed JWT
//       res.send(createJwt(profile));
//     })
//     .catch(function(err) {
//       res.send("Failed!" + err.message);
//     });
// });
//
// app.get("/secure", function(req, res) {
//   var jwtString = req.query.jwt;
//   try {
//     var profile = verifyJwt(jwtString);
//     res.send(profile.id);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

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
  console.log("JWT", facebookjwt);
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
