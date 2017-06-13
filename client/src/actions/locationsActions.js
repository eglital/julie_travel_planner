import 'isomorphic-fetch';

import {
    FETCH_LOCATIONS_DATA_SUCCESS,
    FETCH_LOCATIONS_DATA_FAILURE
}
from './types';
import ApiResponseHelper from '../helpers/apiResponseHelper';
import { setItineraryId } from './itineraryActions.js';



export function fetchLocationsDataSuccess(data) {
    return {
        type: FETCH_LOCATIONS_DATA_SUCCESS,
        data
    };
}

export function fetchLocationsDataFailure(error) {
    return {
        type: FETCH_LOCATIONS_DATA_FAILURE,
        error
    };
}


export function fetchLocationsData(form) {
    return (dispatch) => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        const options = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(form)
        };

        return fetch('/api/itinerary/start', options)
            .then(ApiResponseHelper.responseChecker)
            .then(ApiResponseHelper.parseToJSON)
            .then((data) => {
                let itineraryId = data.itineraryId;
                //remove from data object
                delete data.itineraryId;
                //update the locations reducer
                dispatch(fetchLocationsDataSuccess(data));
                //update the itinerary reducer
                dispatch(setItineraryId(itineraryId));
                
                
                
            })
            .catch(err => {
                dispatch(fetchLocationsDataFailure(err));
            });

    };
}




