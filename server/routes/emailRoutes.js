const EmailService = require("../services/email");
const express = require("express");
const router = express.Router();
router.post("/service/email", (req, res, next) => {
  const text = "Success";

  const options = {
    from: "julie-travel-planner@julie.com",
    to: req.body.email,
    subject: "Check out my itinerary",
    text,
    html: `<p>${text}</p>`
  };

  EmailService.send(options)
    .then(result => {
      //
    })
    .catch(next);
});

module.exports = router;
