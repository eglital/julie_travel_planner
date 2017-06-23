import React from "react";
import "isomorphic-fetch";
import request from "superagent";
import hello from "hellojs";
hello.init({
  facebook: 1842025409382073
});
//<a href={`https://www.facebook.com/v2.9/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&redirect_uri=${"https://localhost:8081/sweettastybananas"}`}>Login with Facebook</a>
let NavbarRefresh;
const LoginButton = ({ loginUser }) => {
  NavbarRefresh = loginUser;
  return (
    <p
      className="nav-hover"
      style={{ cursor: "pointer", paddingLeft: "15px" }}
      onClick={() => hello("facebook").login({ scope: "email" })}
    >
      Log In
    </p>
  );
};

export default LoginButton;

let socialToken;

hello.on("auth.login", function(auth) {
  // Save the social token
  socialToken = auth.authResponse.access_token;

  // Auth with our own server using the social token
  authenticate(auth.network, socialToken).then(function(token) {
    //save this token to localhost
    localStorage.setItem("facebookAuth", token.facebookjwt);
    localStorage.removeItem("hello");
    //"refresh the page?"
    NavbarRefresh();
  });
});

function authenticate(network, socialToken) {
  return new Promise(function(resolve, reject) {
    request
      .post("https://julie-server.herokuapp.com/auth/facebook")
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
