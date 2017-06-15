import {
  SET_FETCHING,
  FETCH_LOCATIONS_DATA_SUCCESS,
  FETCH_LOCATIONS_DATA_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  error: null
};

export function locationsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_LOCATIONS_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case FETCH_LOCATIONS_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
}
