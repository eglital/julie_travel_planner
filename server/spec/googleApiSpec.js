const app = require("../server");
const mongoose = require("mongoose");
const Itinerary = mongoose.model("Itinerary");
const request = require("request");
const { hashId, checkHash } = require("../helpers/hashItineraryId");

describe("Google API", () => {
  const baseUrl = "http://localhost:8888";
  const apiUrl = baseUrl + "/api/itinerary";
  let originalTimeout;
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
  beforeEach(done => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    Itinerary.create({
      startTime: new Date(2017, 6, 12, 10, 0, 0).valueOf(),
      endTime: new Date(2017, 6, 12, 22, 0, 0).valueOf(),
      duration: 100000,
      transportationMode: "driving",
      data: [
        {
          departureTime: new Date(2017, 6, 12, 10, 0, 0).valueOf(),
          arrivalTime: null,
          lng: -87.636393,
          lat: 41.878112
        },
        {
          name: "Revival Food Hall",
          address: "125 S Clark St",
          lat: 41.8797704672721,
          lng: -87.63060092926025,
          category: "Food Court",
          tip: "The chef-driven food hall has a kiosk where Mindy Segal's staff serve her famous hot chocolate that includes the all-important homemade marshmallows. Get it to go.",
          isOpen: true,
          hours: "Open until 7:00 PM",
          arrivalTime: new Date(2017, 6, 12, 11, 0, 0).valueOf(),
          departureTime: new Date(2017, 6, 12, 12, 0, 0).valueOf()
        }
      ]
    }).then(result => {
      itinerary = result;
      done();
    });
    afterEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });

  it("adds selected location to the database and returns updated duration", done => {
    request(
      {
        method: "PUT",
        url: `${apiUrl}/select`,

        json: {
          location: {
            name: "Cafecito",
            address: "26 E Congress Pkwy",
            lat: 41.87574423890672,
            lng: -87.6264445685823,
            category: "Cuban Restaurant",
            tip: "Wifi pass is cubano01",
            isOpen: true,
            hours: "Open until 9:00 PM"
          },
          itineraryId: hashId(itinerary._id),
          section: "food"
        }
      },
      (err, res, body) => {
        expect(body.duration).toEqual(3973000);
        done();
      }
    );
  });

  it("returns the final itinerary", done => {
    request.get(
      `${apiUrl}/final/${hashId(itinerary._id)}`,
      (err, res, body) => {
        let result = JSON.parse(body);
        expect(result.itinerary.data.length).toBe(3);
        expect(
          result.itinerary.data[result.itinerary.data.length - 1].lat
        ).toEqual(result.itinerary.data[0].lat);
        done();
      }
    );
  });
});
