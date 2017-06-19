import { SET_ITINERARY_DATA, SET_FINAL_ITINERARY, CHANGE_TRANSPORTATION_MODE } from "../actions/types";

const INITIAL_STATE = {
    id: null,
    startTime: null,
    endTime: null,
    finalItinerary: [],
    transportationMode: "driving"
};

export function itineraryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_ITINERARY_DATA:
            return {
                ...state,
                id: action.data.id,
                startTime: action.data.startTime,
                endTime: action.data.endTime
            };
        case SET_FINAL_ITINERARY:
            return {
                ...state,
                id: action.data.id,
                finalItinerary: action.data.finalItinerary
            };
        case CHANGE_TRANSPORTATION_MODE:
            return {
                ...state,
                transportationMode: action.data
            };
        default:
            return state;
    }
}
