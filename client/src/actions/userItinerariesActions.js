import "isomorphic-fetch";

import { FETCH_USER_ITINERARIES_SUCCESS } from "./types";
import ApiResponseHelper from "../helpers/apiResponseHelper";

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
      qs = "?" + "facebookjwt=" + localStorage.getItem("facebookAuth");
    }
    return fetch(`/api/user/itineraries${qs}`)
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
