import { SET_ITINERARY_DATA, SET_FINAL_ITINERARY } from "./types";
import itineraryHelper from "../helpers/itineraryHelper";
import axios from "axios";

export function setItineraryData(data) {
  return {
    type: SET_ITINERARY_DATA,
    data
  };
}

export function getFinalItinerary(itineraryId, history) {
  return dispatch => {
    axios
      .get(
        `https://julie-server.herokuapp.com/api/itinerary/final/${itineraryId}`
      )
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Response not ok");
        }
        itineraryHelper.setItineraryObj(itineraryId);
        dispatch(
          setFinalItinerary({
            finalItinerary: response.data.itinerary,
            id: itineraryId
          })
        );
        history.push(`/itinerary-overview/${itineraryId}`);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  };
}

export function setFinalItinerary(data) {
  return {
    type: SET_FINAL_ITINERARY,
    data
  };
}

export function getSavedItinerary(itineraryId) {
  return dispatch => {
    axios
      .get(
        `https://julie-server.herokuapp.com/api/itinerary/saved/${itineraryId}`
      )
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Response not ok");
        }
        dispatch(
          setFinalItinerary({
            finalItinerary: response.data.itinerary,
            id: itineraryId
          })
        );
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  };
}
