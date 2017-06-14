import { SET_ITINERARY_DATA } from '../actions/types';

const INITIAL_STATE = {
    id: null,
    startTime: null,
    endTime: null
};



export function itineraryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_ITINERARY_DATA:
            return {
                ...state,
                id: action.data.id,
                startTime: action.data.startTime,
                endTime: action.data.endTime
            };
        default:
            return state;
    }
}