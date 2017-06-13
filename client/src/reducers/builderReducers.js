import * as Actions from '../actions/builderActions';

const initialState = {
  itineraryId: 1,
  duration: 0
};

export function builder(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_LOCATION_TO_ITINERARY:
      console.log(action.data);
      return {
        ...state,
        duration: action.data.duration
      };
    default:
      return state;
  }
}
