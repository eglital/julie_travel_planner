const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const models = require("./../models");
const User = mongoose.model("User");
const Itinerary = mongoose.model("Itinerary");
const { verifyJwt } = require("../helpers/auth");
const md5 = require("md5");
const secret = process.env.itinerarySecret || "t#he ca>t's paj=amas";
const { hashId } = require("../helpers/hashItineraryId");

router.get("/user/itineraries", (req, res, next) => {
  console.log("getting itineraries for the user");
  let jwtString = req.query.facebookjwt;
  try {
    let userId = verifyJwt(jwtString).userId;
    User.findById(userId)
      .populate("itineraries")
      .sort({ createdAt: "desc" })
      .then(itineraries => {
        adjustedItineraries = itineraries.itineraries.map(itin => {
          newItin = {};
          newItin._id = itin._id;

          newItin.data = itin.data;
          newItin.city = itin.city;
          newItin.hashedId = hashId(itin._id);
          return newItin;
        });

        res.send({ itineraries: adjustedItineraries });
      })
      .catch(next);
  } catch (err) {
    next(err);
  }
});

router.delete("/user/itineraries/:itineraryId", (req, res, next) => {
  console.log("deleting itinerary");
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
