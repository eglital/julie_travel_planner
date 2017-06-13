import 'isomorphic-fetch';

import {
    FETCH_LOCATIONS_DATA_SUCCESS,
    FETCH_LOCATIONS_DATA_FAILURE
}
from './types';
import ApiResponseHelper from '../helpers/apiResponseHelper';
import ItineraryHelper from '../helpers/itineraryHelper';


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
                console.log("got data from server", data);
                //create object with expiration date and store in localStorage
                ItineraryHelper.setItineraryObj(data.itineraryId);
                //remove the itineraryId so it is not stored in state
                delete data.itineraryId;
                //update the reducer
                dispatch(fetchLocationsDataSuccess(data));
            })
            .catch(err => {
                dispatch(fetchLocationsDataFailure(err));
            });

    };
}




