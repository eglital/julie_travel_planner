// start_time, end_time, duration = 0, data: [ {} ], timestamps
//se
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = mongoose.Schema({
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date
  },
  duration: {
    type: Number,
    default: 0,
    required: true
  },
  data: [{}],
  createdAt: { type: Date, expires: "8h", default: Date.now }
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;
