function createJwt(profile) {
  return jwt.sign(profile, process.env.JWT_SECRET, {
    expiresIn: "24h",
    issuer: "JULIE"
  });
}

module.exports = { createJwt };
