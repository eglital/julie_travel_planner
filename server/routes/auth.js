const express = require("express");
const router = express.Router();
const { createJwt } = require("../helpers/auth");

module.exports = passport => {
  router.get(
    "/facebook",
    passport.authenticate("facebook", { scope: "email" })
  );

  router.get(
    "/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    function(req, res) {
      console.log("----------------- this is being hit -----------------");
      console.log(req);
      // Successful authentication, redirect home.
      res.send(createJwt("hello"));
    }
  );
  return router;
};
