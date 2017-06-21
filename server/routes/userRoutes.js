const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const models = require("./../models");
const User = mongoose.model("User");
const Itinerary = mongoose.model("Itinerary");
const { verifyJwt } = require("../helpers/auth");

router.get("/user/itineraries", (req, res, next) => {
  let jwtString = req.query.facebookjwt;

  try {
    let userId = verifyJwt(jwtString).userId;
    User.findById(userId)
      .populate("itineraries")
      .sort({ createdAt: "asc" })
      .then(itineraries => res.send({ itineraries: itineraries.itineraries }))
      .catch(next);
  } catch (err) {
    next(err);
  }
});

router.delete("/user/itineraries/:itineraryId", (req, res, next) => {
  let jwtString = req.query.facebookjwt;
  let itineraryId = req.params.itineraryId;
  try {
    let userId = verifyJwt(jwtString).userId;

    Itinerary.findByIdAndRemove(itineraryId)
      .then(() => {
        User.findByIdAndUpdate(userId, {
          $pull: { itineraries: req.params.itineraryId }
        });
      })
      .then(() => res.send({ success: "success" }))
      .catch(next);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
