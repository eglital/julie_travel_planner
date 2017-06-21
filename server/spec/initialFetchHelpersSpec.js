const app = require("../server");
const mongoose = require("mongoose");
const Itinerary = mongoose.model("Itinerary");
const request = require("request");

const {
  initialFourSquareRequest,
  fourSquareStringBuilder,
  buildListOfChoices,
  createItinary
} = require("../helpers/fourSquareRequestHelpers");

describe("This is a section of testes for the initial four square request", () => {
  const baseUrl = "http://localhost:8888";
  const apiUrl = baseUrl + "/api/itinerary";
  var originalTimeout;
  let server, itinerary;

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

  describe("createItinary", () => {
    let dummy = {};
    dummy.startTime = Date.now();
    dummy.endTime = Date.now() + 14400000;
    dummy.lat = 45.7833;
    dummy.lng = -108.5007;
    const results = createItinary(dummy);
    it("returns an Itinerary Object", function(done) {
      const results = createItinary(dummy);
      expect(results.data[0].lat).toEqual(45.7833);
      done();
    });
    it("returns an Itinearary Object", function() {
      // const results = buildListOfChoices([]);
      expect(function() {
        buildListOfChoices([]);
      }).toThrow(new Error("the data must be an array of arrays"));
    });
    it("returns an Itinearary Object", function() {
      // const results = buildListOfChoices([]);
      expect(function() {
        buildListOfChoices([1, 2, 3, 4]);
      }).toThrow(new Error("the data must be an array of arrays"));
    });
  });

  describe("test api/itinerary/start response", () => {
    it("adds starts new itinerary in database and sends itinerary info", done => {
      request(
        {
          method: "POST",
          url: `${apiUrl}/start`,

          json: {
            formSubmission: {
              startTime: Date.now().valueOf(),
              endTime: Date.now().valueOf() + 14400000,
              startingLocation: [41.87574423890672, -87.6264445685823],
              transportationMode: "driving"
            }
          }
        },
        (err, res, body) => {
          expect(body.itinerary.duration).toEqual(0);
          done();
        }
      );
    });
  });
});
