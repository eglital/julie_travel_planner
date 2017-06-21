import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import "isomorphic-fetch";
import request from "superagent";
import hello from "hellojs";
hello.init({
  facebook: process.env.REACT_APP_FACEBOOK_APP_ID
});
var fb = hello("facebook");
//<a href={`https://www.facebook.com/v2.9/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&redirect_uri=${"https://localhost:8081/sweettastybananas"}`}>Login with Facebook</a>
const LoginButton = () => {
  return (
    <Button
      onClick={() =>
        fb
          .login({ scope: "email" })
          .then(function() {
            return fb.api("me");
          })
          .then(function(res) {
            console.log(res);
          }, console.error.bind(console))}
    >
      Login with Facebook
    </Button>
  );
};

LoginButton.propTypes = {};

export default LoginButton;

let socialToken;

hello.on("auth.login", function(auth) {
  // Save the social token
  socialToken = auth.authResponse.access_token;
  console.log("this is the social token", socialToken);
  // Auth with our own server using the social token
  authenticate(auth.network, socialToken).then(function(token) {
    //save this token to localhost
    localStorage.setItem("facebookAuth", token.facebookjwt);
    //"refresh the page?"
  });
});

function authenticate(network, socialToken) {
  return new Promise(function(resolve, reject) {
    request
      .post("/auth/facebook")
      .send({
        network: network,
        socialToken: socialToken
      })
      .set("Accept", "application/json")
      .end(function(err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(res.text));
        }
      });
  });
}
