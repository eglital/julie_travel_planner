import * as Actions from '../actions/builderActions';

const initialState = {
  duration: 0
};

export function builder(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_LOCATION_TO_ITINERARY:
      return {
        ...state,
        duration: action.data.duration
      };
    case Actions.GET_FINAL_ITINERARY:
      return {
        ...state,
        finalItinerary: action.data.itinerary
      };
    case Actions.SET_DURATION:
      return {
        ...state,
        duration: action.data.duration
      };
    default:
      return state;
  }
}
