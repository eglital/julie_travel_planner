import * as Actions from "../actions/builderActions";
import { SET_DURATION } from "../actions/types";

const initialState = {
  duration: 0
};

export function builder(state = initialState, action) {
  switch (action.type) {
    case SET_DURATION:
      return {
        ...state,
        duration: action.data.duration
      };
    default:
      return state;
  }
}
