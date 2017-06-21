import {
  SET_FETCHING,
  FETCH_LOCATIONS_DATA_SUCCESS,
  FETCH_LOCATIONS_DATA_FAILURE,
  DELETE_SELECTED_LOCATION,
  DELETE_LOCATIONS_DATA
} from "../actions/types";

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
    case DELETE_LOCATIONS_DATA:
      return {
        ...state,
        data: {}
      };
    case DELETE_SELECTED_LOCATION:
      let modifiedData = {};
      for (let key in state.data) {
        if (key !== action.data.section) {
          modifiedData[key] = state.data[key];
        } else {
          let sectionWithRemovedLocation = state.data[key].filter(loc => {
            return loc.name !== action.data.location.name;
          });
          modifiedData[key] = sectionWithRemovedLocation;
        }
      }
      return {
        ...state,
        data: modifiedData
      };
    default:
      return state;
  }
}
