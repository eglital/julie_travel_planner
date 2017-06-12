// start_time, end_time, duration = 0, data: [ {} ], timestamps
//se
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = mongoose.Schema({
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date
  },
  duration: {
    type: Number,
    default: 7200000,
    required: true
  },
  data: [{}]
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;
