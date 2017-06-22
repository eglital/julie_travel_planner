import {
  SET_DURATION,
  CHANGE_LAST_FOOD,
  TOGGLE_MEALS_INCLUSION
} from '../actions/types';
const initialState = {
  duration: 0,
  lastFood: false,
  mealsIncluded: true
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
    case TOGGLE_MEALS_INCLUSION:
      return {
        ...state,
        mealsIncluded: !state.mealsIncluded
      };
    default:
      return state;
  }
}
