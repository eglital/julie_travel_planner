const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");

module.exports = () => {
  // ----------------------------------------
  // Create Itinerary
  // ----------------------------------------
  console.log("Creating Itinerary");
  var itineraries = [];
  itineraries.push(
    new Itinerary({
      startTime: new Date(2017, 6, 12, 10, 0, 0).valueOf(),
      endTime: new Date(2017, 6, 12, 22, 0, 0).valueOf(),
      data: [
        {
          lat: 41.878112,
          lng: -87.636393,
          arrivalTime: null,
          departureTime: new Date(2017, 6, 12, 10, 0, 0).valueOf()
        }
      ]
    })
  );

  console.log("Empty itinerary id:", itineraries[0].id);
  //Seed other models...

  // ----------------------------------------
  // Finish
  // ----------------------------------------
  console.log("Saving...");
  var promises = [];
  [
    itineraries
    //other models...
  ].forEach(collection => {
    collection.forEach(model => {
      promises.push(model.save());
    });
  });
  return Promise.all(promises);
};
