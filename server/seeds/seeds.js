const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");

module.exports = () => {
  // ----------------------------------------
  // Create Itinerary
  // ----------------------------------------
  console.log("Creating Itinerary");
  // var itineraries = [];
  //   itinerary.push({});

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
