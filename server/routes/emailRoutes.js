const EmailService = require("../services/email");
const express = require("express");
const router = express.Router();
var EmailTemplate = require("email-templates").EmailTemplate;
var path = require("path");

var templateDir = path.join(__dirname, "templates", "itinerary-email");
var template = new EmailTemplate(templateDir);

router.post("/service/email", (req, res, next) => {
  console.log("sending email");
  const { itinerary, name, id, email } = req.body;
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
