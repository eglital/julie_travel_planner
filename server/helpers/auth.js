const jwt = require("jsonwebtoken");

function createJwt(profile) {
  return jwt.sign(profile, process.env.JWT_SECRET, {
    expiresIn: "12h",
    issuer: "JULIE"
  });
}

function verifyJwt(jwtString) {
  return jwt.verify(jwtString, process.env.JWT_SECRET, {
    issuer: "JULIE"
  });
}

module.exports = { createJwt, verifyJwt };
