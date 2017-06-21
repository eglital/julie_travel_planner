// start_time, end_time, duration = 0, data: [ {} ], timestamps
//se
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = mongoose.Schema({
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number
  },
  duration: {
    type: Number,
    default: 0,
    required: true
  },
  transportationMode: {
    type: String
  },
  city: { type: String, default: "" },
  data: [{}],
  createdAt: { type: Date, default: Date.now }
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;
