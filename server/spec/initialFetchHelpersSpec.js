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

xdescribe(
  "This is a section of testes for the initial four square request",
  () => {
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

    describe("test api/itinerary/start response", () => {
      beforeEach(done => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

        afterEach(() => {
          jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
      });

      it("adds selected location to the database and returns updated duration", done => {
        request(
          {
            method: "POST",
            url: `${apiUrl}/start`,

            json: {
              formSubmission: {
                startTime: Date.now(),
                endTime: Date.now() + 14400000,
                startingLocation: [41.87574423890672, -87.6264445685823]
              }
            }
          },
          (err, res, body) => {
            expect(body.food[0].lng).toEqual(-87.6264445685823);
            done();
          }
        );
      });
    });

    describe("createItinary", () => {
      let dummy = {};
      console.log(Date.now());
      dummy.startTime = Date.now();
      dummy.endTime = Date.now() + 14400000;
      dummy.lat = 45.7833;
      dummy.lng = -108.5007;
      it("returns an Itinearary Object", function() {
        const results = createItinary(dummy);
        expect(results.data[0].lat).toEqual(45.7833);
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
  }
);
