const moment = require("moment");
const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: require("q").Promise
});
//in seconds
const timeInSections = {
  food: 3600,
  places: (Math.floor(Math.random() * 2) + 2) * 3600,
  sights: (Math.floor(Math.random() * 2) + 2) * 3600
};
const selectingItinerary = ({ location, itineraryId, section, res, next }) => {
  let destinations = [location.lat, location.lng];
  let origins, departure_time, itinerary;

  return new Promise((resolve, reject) => {
    Itinerary.findById(itineraryId)
      .then(itinerary => {
        itinerary = itinerary;
        departure_time = new Date(
          itinerary.data[itinerary.data.length - 1].departureTime
        );
        origins = [
          itinerary.data[itinerary.data.length - 1].lat,
          itinerary.data[itinerary.data.length - 1].lng
        ];

        googleMapsClient
          .distanceMatrix({
            origins: [origins],
            destinations: [destinations],
            mode: "driving",
            departure_time,
            units: "imperial"
          })
          .asPromise()
          .then(response => {
            //duration value in seconds
            let responseDuration =
              response.json.rows[0].elements[0].duration.value;

            let newArrivalTime = moment(
              itinerary.data[itinerary.data.length - 1].departureTime
            )
              .add(responseDuration, "s")
              .format();

            let randomDuration = timeInSections[section];

            let newDepartureTime = moment(newArrivalTime)
              .add(randomDuration, "s")
              .format();

            let newLocation = location;

            newLocation.arrivalTime = newArrivalTime;
            newLocation.departureTime = newDepartureTime;

            //in miliseconds
            let newDuration =
              itinerary.duration +
              responseDuration * 1000 +
              randomDuration * 1000;

            Itinerary.findByIdAndUpdate(
              itinerary._id,
              {
                $push: { data: newLocation },
                duration: newDuration
              },
              { new: true }
            ).then(itinerary => {
              resolve(itinerary);
            });
          })
          .catch(err => {
            res.send(err.json.error_message);
          });
      })
      .catch(next);
  });
};

module.exports = { googleMapsClient, selectingItinerary };
