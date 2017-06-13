import { SET_ITINERARY_ID } from '../actions/types';

const INITIAL_STATE = {
    id: null
};



export function itineraryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_ITINERARY_ID:
            return {
                ...state,
                id: action.data
            };
        default:
            return state;
    }
}