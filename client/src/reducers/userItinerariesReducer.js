import {
  FETCH_USER_ITINERARIES_SUCCESS,
  DELETE_ITINERARY_FAILURE,
  DELETE_ITINERARY_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  data: null
};

export function userItinerariesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_ITINERARIES_SUCCESS:
      return {
        ...state,
        data: action.data
      };

    case DELETE_ITINERARY_FAILURE:
      return {
        ...state,
        error: action.data
      };

    case DELETE_ITINERARY_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
