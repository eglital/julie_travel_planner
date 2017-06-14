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

const selectingItinerary = ({ location, itineraryId, section, res }) => {
  let origins, departure_time, itinerary, responseDuration, destinations;

  return new Promise((resolve, reject) => {
    Itinerary.findById(itineraryId)
      .then(itin => {
        itinerary = itin;
      })
      .then(() => {
        const {
          departure_time,
          origins,
          destinations
        } = formatOriginsDestinations({
          origin: itinerary.data[itinerary.data.length - 1],
          destination: location
        });

        return googleRequest({
          origins,
          destinations,
          departure_time
        });
      })
      .then(response => {
        //duration value in seconds
        responseDuration = response.json.rows[0].elements[0].duration.value;

        const { newLocation, newDuration } = formatItineraryUpdate({
          responseDuration,
          location,
          lastLocation: itinerary.data[itinerary.data.length - 1],
          section,
          duration: itinerary.duration
        });

        return Itinerary.findByIdAndUpdate(
          itinerary._id,
          {
            $push: { data: newLocation },
            duration: newDuration
          },
          { new: true }
        );
      })
      .then(itinerary => {
        if (!itinerary) reject(err);
        resolve(itinerary);
      })
      .catch(err => {
        res.send(err.json.error_message);
      });
  });
};

const finishingItinerary = ({ itineraryId, res }) => {
  let destinations, origins, departure_time, itinerary, responseDuration;
  return new Promise((resolve, reject) => {
    Itinerary.findById(itineraryId)
      .then(itin => {
        itinerary = itin;
      })
      .then(() => {
        const {
          departure_time,
          origins,
          destinations
        } = formatOriginsDestinations({
          origin: itinerary.data[itinerary.data.length - 1],
          destination: itinerary.data[0]
        });

        return googleRequest({
          origins,
          destinations,
          departure_time
        });
      })
      .then(response => {
        //duration value in seconds
        responseDuration = response.json.rows[0].elements[0].duration.value;
        const { newLocation, newDuration } = formatItineraryUpdate({
          responseDuration,
          location: itinerary.data[0],
          lastLocation: itinerary.data[itinerary.data.length - 1],
          duration: itinerary.duration
        });

        return Itinerary.findByIdAndUpdate(
          itinerary._id,
          {
            $push: { data: newLocation },
            duration: newDuration
          },
          { new: true }
        );
      })
      .then(itinerary => {
        if (!itinerary) reject(err);
        resolve(itinerary);
      });
  }).catch(err => {
    res.send(err.json.error_message);
  });
};

//private methods
const googleRequest = ({ origins, destinations, departure_time }) => {
  return new Promise((resolve, reject) => {
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
        if (!response) reject(err);
        resolve(response);
      });
  });
};

const addSeconds = ({ initialTime, duration }) => {
  return moment(initialTime).add(duration, "s").format();
};
const formatOriginsDestinations = ({ origin, destination }) => {
  return {
    departure_time: new Date(origin.departureTime),
    origins: [origin.lat, origin.lng],
    destinations: [destination.lat, destination.lng]
  };
};
const formatItineraryUpdate = ({
  responseDuration,
  location,
  lastLocation,
  section,
  duration
}) => {
  let newArrivalTime,
    randomDuration,
    newDepartureTime,
    newLocation,
    newDuration;

  newArrivalTime = addSeconds({
    initialTime: lastLocation.departureTime,
    duration: responseDuration
  });
  randomDuration = section ? timeInSections[section] : 0;
  newDepartureTime = addSeconds({
    initialTime: newArrivalTime,
    duration: randomDuration ? randomDuration : null
  });
  newLocation = location;
  newLocation.arrivalTime = newArrivalTime;
  newLocation.departureTime = newDepartureTime;
  newLocation.section = section;
  //in miliseconds
  newDuration = duration + responseDuration * 1000 + randomDuration * 1000;
  return { newLocation, newDuration };
};

module.exports = { googleMapsClient, selectingItinerary, finishingItinerary };
