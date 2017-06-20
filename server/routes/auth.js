const express = require("express");
const router = express.Router();
var request = require("request");
const { createJwt } = require("../helpers/auth");
const User = require("../models").User;
//
// module.exports = passport => {
//   router.get(
//     "/facebook",
//     passport.authenticate("facebook", { scope: "email" })
//   );
//
//   router.get(
//     "/facebook/callback",
//     passport.authenticate("facebook", { session: false }),
//     (req, res) => {
//       res.send({ facebookAuth: hashId(req.user._id) });
//     }
//   );
//   return router;
// };

router.post("/facebook", (req, res) => {
  // Grab the social network and token
  var network = req.body.network;
  var socialToken = req.body.socialToken;

  // Validate the social token with Facebook
  validateWithProvider(network, socialToken)
    .then(profile => {
      return User.findOrCreateFacebook(profile);
    })
    .then(user => {
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      // console.log(user);
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      res.send(createJwt(user._id));
    })
    .catch(function(err) {
      res.send("Failed!" + err.message);
    });
});

var providers = {
  facebook: {
    url: "https://graph.facebook.com/me"
  }
};

function validateWithProvider(network, socialToken) {
  return new Promise((resolve, reject) => {
    // Send a GET request to Facebook with the token as query string
    request(
      {
        url: providers[network].url,
        qs: { access_token: socialToken }
      },
      (error, response, body) => {
        console.log("------------------------------");
        console.log(body);
        console.log("------------------------------");
        if (!error && response.statusCode == 200) {
          console.log("this is hit");
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = router;
