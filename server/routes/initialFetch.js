const express = require("express");
const router = express.Router();
const {
  initialFourSquareRequest
} = require("../helpers/fourSquareRequestHelpers");

router.post("/", (req, res, next) => {
  // {
  // startTime: Number(milliseconds),
  // endTime: Number(milliseconds),
  // startingLocation: Array[lat, lon]
  // }

  req.body;
  let dummy = {};
  dummy.startTime = Date.now();
  dummy.endTime = Date.now() + 14400000;
  dummy.lat = 45.7833;
  dummy.lng = -108.5007;
  req.query = dummy;
  initialFourSquareRequest(req.query)
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

module.exports = router;
