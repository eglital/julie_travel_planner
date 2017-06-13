import * as Actions from '../actions/builderActions';

const initialState = {
  itineraryId: 1
};

export function builder(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_LOCATION_TO_ITINERARY:
      return {
        ...state
      };
    default:
      return state;
  }
}
