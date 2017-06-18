import { SET_DURATION, CHANGE_LAST_FOOD } from "../actions/types";

const initialState = {
  duration: 0,
  mealsIncluded: false,
  lastFood: false
};

export function builder(state = initialState, action) {
  switch (action.type) {
    case SET_DURATION:
      return {
        ...state,
        duration: action.data.duration
      };
    case CHANGE_LAST_FOOD:
      return {
        ...state,
        lastFood: action.data
      };
    default:
      return state;
  }
}
