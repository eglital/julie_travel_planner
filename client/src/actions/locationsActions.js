import "isomorphic-fetch";

import {
  SET_FETCHING,
  FETCH_LOCATIONS_DATA_SUCCESS,
  FETCH_LOCATIONS_DATA_FAILURE,
  DELETE_SELECTED_LOCATION,
  DELETE_LOCATIONS_DATA
} from "./types";
import ApiResponseHelper from "../helpers/apiResponseHelper";
import { setItineraryData } from "./itineraryActions.js";

export function setFetching() {
  return {
    type: SET_FETCHING
  };
}

export function fetchLocationsDataSuccess(data) {
  return {
    type: FETCH_LOCATIONS_DATA_SUCCESS,
    data
  };
}

export function fetchLocationsDataFailure(error) {
  return {
    type: FETCH_LOCATIONS_DATA_FAILURE,
    error
  };
}

export function fetchLocationsData(form) {
  return dispatch => {
    //setFetching here
    dispatch(setFetching());
    
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });
    const options = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(form)
    };

    return fetch("/api/itinerary/start", options)
      .then(ApiResponseHelper.responseChecker)
      .then(ApiResponseHelper.parseToJSON)
      .then(data => {
        let itinerary = data.itinerary;
        //remove from data object
        delete data.itinerary;
        //update the locations reducer

        dispatch(setItineraryData(itinerary));

        dispatch(fetchLocationsDataSuccess(data.locations));
      })
      .catch(err => {
        dispatch(fetchLocationsDataFailure(err));
      });
  };
}

export function deleteLocationsData() {
  return {
    type: DELETE_LOCATIONS_DATA
  };
}

export function deleteSelectedLocation(data) {
  return {
    type: DELETE_SELECTED_LOCATION,
    data
  };
}
