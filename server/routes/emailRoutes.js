const EmailService = require("../services/email");
const express = require("express");
const router = express.Router();
var EmailTemplate = require("email-templates").EmailTemplate;
var path = require("path");
const md5 = require("md5");
const secret = process.env.itinerarySecret || "t#he ca>t's paj=amas";
const { hashId } = require("../helpers/hashItineraryId");

var templateDir = path.join(__dirname, "templates", "itinerary-email");
var template = new EmailTemplate(templateDir);

router.post("/service/email", (req, res, next) => {
  console.log("sending email");
  const { itinerary, name, id, email } = req.body;
  console.log("EMAIL", id);
  template.render({ itinerary, name, id }).then(results => {
    const options = {
      from: "julie-travel-planner@julie.com",
      to: email,
      subject: "Check out my itinerary",
      text: results.text,
      html: results.html
    };
    EmailService.send(options)
      .then(result => {
        console.log("Email sent");
        res.send(result);
      })
      .catch(next);
  });
});

module.exports = router;
