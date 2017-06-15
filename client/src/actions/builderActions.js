import axios from "axios";
import { getFinalItinerary } from "./itineraryActions";
import { SET_DURATION } from "./types";

export function addLocationToItinerary(
  location,
  section,
  itineraryId,
  itinerary,
  history
) {
  return dispatch => {
    axios
      .put("/api/itinerary/select", {
        location: location,
        itineraryId: itineraryId,
        section: section
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Response not ok");
        }
        dispatch(setDuration(response.data));
        if (
          itinerary.endTime - itinerary.startTime - response.data.duration <=
          60 * 60 * 1000
        ) {
          dispatch(getFinalItinerary(itineraryId, history));
        }
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  };
}

export function setDuration(data) {
  return {
    type: SET_DURATION,
    data
  };
}
