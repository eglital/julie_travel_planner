import 'isomorphic-fetch';

import {
    FETCH_LOCATIONS_DATA_SUCCESS,
    FETCH_LOCATIONS_DATA_FAILURE
}
from './types';
import ApiResponseHelper from '../helpers/apiResponseHelper';
import {
    setItineraryId
}
from './itineraryActions.js';



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
                let itinerary = data.itinerary;
                //remove from data object
                delete data.itinerary;
                //update the locations reducer

                dispatch(setItineraryId(itinerary));
                
                dispatch(fetchLocationsDataSuccess(data.locations))

            })
            .catch(err => {
                dispatch(fetchLocationsDataFailure(err));
            });

    };
}
