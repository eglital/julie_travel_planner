const express = require("express");
const router = express.Router();
var request = require("request");
const { createJwt } = require("../helpers/auth");
const User = require("../models").User;

router.post("/facebook", (req, res) => {
  var network = req.body.network;
  var socialToken = req.body.socialToken;

  validateWithProvider(network, socialToken)
    .then(profile => {
      return User.findOrCreateFacebook(profile);
    })
    .then(user => {
      res.send({ facebookjwt: createJwt({ userId: user._id }) });
    })
    .catch(function(err) {
      res.send("Failed!" + err.message);
    });
});

var providers = {
  facebook: {
    url: "https://graph.facebook.com/me?fields=id,name,email"
  }
};

function validateWithProvider(network, socialToken) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: providers[network].url,
        qs: { access_token: socialToken }
      },
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = router;
