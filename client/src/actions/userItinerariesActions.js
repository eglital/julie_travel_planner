import "isomorphic-fetch";

import {
  FETCH_USER_ITINERARIES_SUCCESS,
  DELETE_ITINERARY_FAILURE,
  DELETE_ITINERARY_SUCCESS
} from "./types";
import ApiResponseHelper from "../helpers/apiResponseHelper";
import axios from "axios";

export function userItinerariesSuccess(data) {
  return {
    type: FETCH_USER_ITINERARIES_SUCCESS,
    data
  };
}

export function fetchUserItinerariesData() {
  return dispatch => {
    let qs = "";
    //for testing
    if (process.env.NODE_ENV !== "test") {
      qs = "?facebookjwt=" + localStorage.getItem("facebookAuth");
    }
    return fetch(`https://julie-server.herokuapp.com/api/user/itineraries${qs}`)
      .then(ApiResponseHelper.responseChecker)
      .then(ApiResponseHelper.parseToJSON)
      .then(data => {
        console.log("data", data);
        //update the locations reducer
        /**
         * data: {
        * userItineraries: []
         }
         *
         **/

        dispatch(userItinerariesSuccess(data.itineraries));
      })
      .catch(err => {
        console.log("dispatching location failure", err);
        // dispatch(userItinerariesFailure(err));
      });
  };
}

export function deleteItinerary(itineraryId, itineraries) {
  let qs = localStorage.getItem("facebookAuth");

  if (itineraries[itineraries.length - 1]._id === itineraryId) {
    localStorage.removeItem("itinerary");
  }

  let updatedItineraries = itineraries.filter(itinerary => {
    return itinerary._id !== itineraryId;
  });

  return dispatch => {
    axios
      .delete(
        `https://julie-server.herokuapp.com/api/user/itineraries/${itineraryId}?facebookjwt=${qs}`
      )
      .then(response => {
        if (response.status !== 200) {
          dispatch(deleteItineraryFailure());
          throw new Error("Response not ok");
        }
        dispatch(deleteItinerarySuccess(updatedItineraries));
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  };
}

export function deleteItineraryFailure(data) {
  return {
    type: DELETE_ITINERARY_FAILURE,
    data
  };
}

export function deleteItinerarySuccess(data) {
  return {
    type: DELETE_ITINERARY_SUCCESS,
    data
  };
}
