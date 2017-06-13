const Itinerary = require("../models").Itinerary;
const {
  initialFourSquareRequest,
  fourSquareStringBuilder,
  buildListOfChoices,
  createItinary
} = require("../helpers/fourSquareRequestHelpers");

describe("This is a section of testes for the initial four square request", () => {
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
});
