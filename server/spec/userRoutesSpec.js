const app = require("../server");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const request = require("request");

xdescribe("Registered User itineraries", () => {
  const baseUrl = "http://localhost:8888";
  const apiUrl = baseUrl + "/api/itinerary";
  let originalTimeout, server;
  beforeAll(done => {
    server = app.listen(8888, () => {
      done();
    });
  });

  afterAll(done => {
    server.close();
    server = null;
    done();
  });
  beforeEach(done => {});
});
