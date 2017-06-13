const express = require("express");
const router = express.Router();
const {
  initialFourSquareRequest
} = require("../helpers/fourSquareRequestHelpers");

router.post("/", (req, res, next) => {
  // req.body = JSON.stringify(req.body);
  // req.body = JSON.parse(req.body);
  //
  // if (typeof req.body.formSubmission.startingLocation === "string") {
  //   let temp = req.body.formSubmission.startingLocation.split(" ");
  //   req.body.formSubmission.startingLocation = [temp[0], temp[1]];
  // }

  // let dummy = {};
  // console.log(Date.now());
  // dummy.startTime = Date.now();
  // dummy.endTime = Date.now() + 14400000;
  // dummy.lat = 45.7833;
  // dummy.lng = -108.5007;
  initialFourSquareRequest(req.body.formSubmission)
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

module.exports = router;
