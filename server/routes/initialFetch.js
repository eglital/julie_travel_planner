const express = require("express");
const router = express.Router();
const {
  initialFourSquareRequest
} = require("../helpers/fourSquareRequestHelpers");

router.post("/", (req, res, next) => {
  req.body = JSON.stringify(req.body);
  req.body = JSON.parse(req.body);

  if (typeof req.body.startingLocation === "string") {
    let temp = req.body.startingLocation.split(" ");
    req.body.startingLocation = [temp[0], temp[1]];
  }
  initialFourSquareRequest(req.body)
    .then(responseObject => {
      res.send(responseObject);
    })
    .catch(next);
});

module.exports = router;
