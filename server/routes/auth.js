const express = require("express");
const router = express.Router();
const { hashId } = require("../helpers/hashItineraryId");

module.exports = passport => {
  router.get(
    "/facebook",
    passport.authenticate("facebook", { scope: "email" })
  );

  router.get(
    "/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.send(hashId(req.user._id));
    }
  );
  return router;
};
