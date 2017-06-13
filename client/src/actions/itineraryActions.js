import { SET_ITINERARY_ID } from './types';

export function setItineraryId(data) {
    return {
        type: SET_ITINERARY_ID,
        data
    };
}