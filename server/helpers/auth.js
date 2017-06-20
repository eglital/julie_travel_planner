const jwt = require("jsonwebtoken");

function createJwt(profile) {
  return jwt.sign(profile, process.env.JWT_SECRET, {
    expiresIn: "2h",
    issuer: "JULIE"
  });
}

module.exports = { createJwt };
