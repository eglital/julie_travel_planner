const moment = require("moment");
const mongoose = require("mongoose");
const models = require("./../models");
const Itinerary = mongoose.model("Itinerary");
const User = mongoose.model("User");
const { verifyJwt } = require("../helpers/auth");

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: require("q").Promise
});

//in miliseconds
const timeInSections = {
  food: 3600000,
  places: (Math.floor(Math.random() * 2) + 2) * 3600000,
  sights: (Math.floor(Math.random() * 2) + 2) * 3600000
};

const addItineraryToUser = ({ facebookjwt, itineraryId }) => {
  return new Promise((resolve, reject) => {
    if (facebookjwt && facebookjwt !== "null") {
      try {
        let userId = verifyJwt(facebookjwt).userId;
        User.findByIdAndUpdate(userId, {
          $push: { itineraries: itineraryId }
        }).then(() => {
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    } else {
      resolve();
    }
  });
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
          departure_time,
          mode: itinerary.transportationMode
        });
      })
      .then(response => {
        //response value in seconds, make it miliseconds
        responseDuration =
          response.json.rows[0].elements[0].duration.value * 1000;

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
  let destinations, origins, departure_time, itinerary, responseDuration, city;
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
        return googleMapsClient
          .reverseGeocode({
            latlng: [itinerary.data[0].lat, itinerary.data[0].lng],
            result_type: ["locality"]
          })
          .asPromise()
          .then(response => {
            city = response.json.results[0].address_components[0].long_name;
            return googleRequest({
              origins,
              destinations,
              departure_time,
              mode: itinerary.transportationMode
            });
          });
      })
      .then(response => {
        //response value in seconds, make it miliseconds
        responseDuration =
          response.json.rows[0].elements[0].duration.value * 1000;
        let { newLocation, newDuration } = formatItineraryUpdate({
          responseDuration,
          location: itinerary.data[0],
          lastLocation: itinerary.data[itinerary.data.length - 1],
          duration: itinerary.duration
        });
        if (
          itinerary.endTime - itinerary.startTime - newDuration >
          60 * 60 * 1000
        ) {
          //check to see if user decided to end it early, then we don't adjust last location times
          return Itinerary.findByIdAndUpdate(
            itinerary._id,
            {
              $push: { data: newLocation },
              duration: newDuration,
              city
            },
            { new: true }
          );
        } else {
          //if user is going to be late or has extra time to spare  adjust time to spend in the last location
          let difference =
            itinerary.endTime - newDuration - itinerary.startTime;
          let lastLocation = itinerary.data[itinerary.data.length - 1];
          newLocation.arrivalTime += difference;
          lastLocation.departureTime += difference;
          newDuration += difference;
          return Itinerary.findByIdAndUpdate(itinerary._id, {
            $pull: { data: { name: lastLocation.name } }
          }).then(() => {
            return Itinerary.findByIdAndUpdate(
              itinerary._id,
              {
                $pushAll: { data: [lastLocation, newLocation] },
                duration: newDuration,
                city
              },
              { new: true }
            );
          });
        }
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
const googleRequest = ({ origins, destinations, departure_time, mode }) => {
  return new Promise((resolve, reject) => {
    googleMapsClient
      .distanceMatrix({
        origins: [origins],
        destinations: [destinations],
        mode,
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

  newArrivalTime = lastLocation.departureTime + responseDuration;
  randomDuration = section ? timeInSections[section] : 0;
  newDepartureTime = randomDuration ? newArrivalTime + randomDuration : null;
  newLocation = location;
  newLocation.arrivalTime = newArrivalTime;
  newLocation.departureTime = newDepartureTime;
  newLocation.section = section;
  //in miliseconds
  newDuration = duration + responseDuration + randomDuration;
  return { newLocation, newDuration };
};

module.exports = {
  googleMapsClient,
  selectingItinerary,
  finishingItinerary,
  addItineraryToUser
};
