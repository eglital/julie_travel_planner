import * as Actions from "../actions/builderActions";

const initialState = {
  duration: 0,
  finalItinerary: []
};

export function builder(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_DURATION:
      return {
        ...state,
        duration: action.data.duration
      };
    case Actions.SET_FINAL_ITINERARY:
      return {
        ...state,
        finalItinerary: action.data.itinerary
      };
    default:
      return state;
  }
}
