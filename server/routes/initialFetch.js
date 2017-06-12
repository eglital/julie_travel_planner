const express = require("express");
const router = express.Router();
const {
  initialFourSquareRequest
} = require("../helpers/fourSquareRequestHelpers");

router.get("/", (req, res, next) => {
  //req.query.initial
  let dummy = {};
  dummy.startTime = Date.now();
  dummy.endTime = Date.now() + 14400000;
  dummy.lat = 45.7833;
  dummy.lng = -108.5007;
  initialFourSquareRequest(dummy)
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

module.exports = router;
