const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const models = require("./../models");
const User = mongoose.model("User");
const { verifyJwt } = require("../helpers/auth");

router.get("/user/itineraries", (req, res, next) => {
  let jwtString = req.query.facebookjwt;

  try {
    let userId = verifyJwt(jwtString).userId;
    User.findById(userId)
      .populate("itineraries")
      .sort({ createdAt: "desc" })
      .then(itineraries => res.send({ itineraries }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
