import { SET_ITINERARY_DATA } from './types';

export function setItineraryData(data) {
    return {
        type: SET_ITINERARY_DATA,
        data
    };
}