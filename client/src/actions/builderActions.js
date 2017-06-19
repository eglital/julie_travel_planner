import axios from "axios";
import { getFinalItinerary } from "./itineraryActions";
import { SET_DURATION, CHANGE_LAST_FOOD, TOGGLE_MEALS_INCLUSION} from "./types";
import { deleteSelectedLocation } from "./locationsActions";

export function addLocationToItinerary(
  location,
  section,
  itineraryId,
  itinerary,
  history
) {
  return dispatch => {
    return axios
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
        if (section === "food") {
          dispatch(changeLastFood(true));
        } else {
          dispatch(changeLastFood(false));
        }
        dispatch(deleteSelectedLocation({ location, section }));
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
export function changeLastFood(data) {
  return {
    type: CHANGE_LAST_FOOD,
    data
  };
}

export function toggleMealsInclusion(){
  return {
    type: TOGGLE_MEALS_INCLUSION
  };
}
