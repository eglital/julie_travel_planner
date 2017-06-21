import {
    SET_ITINERARY_DATA,
    SET_FINAL_ITINERARY,
    CHANGE_TRANSPORTATION_MODE
} from "../actions/types";

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
                endTime: action.data.endTime,
                finalItinerary: []
            };
        case SET_FINAL_ITINERARY:
            return {
                ...state,
                id: action.data.itinerary._id,
                finalItinerary: action.data.itinerary.data,
                startTime: action.data.itinerary.startTime,
                endTime: action.data.itinerary.endTime,
                transportationMode: action.data.itinerary.transportationMode,
                city: action.data.itinerary.city
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
