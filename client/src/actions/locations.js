import 'isomorphic-fetch';
import qs from 'qs';

import { FETCH_LOCATIONS_DATA_SUCCESS, FETCH_LOCATIONS_DATA_FAILURE } from './types';

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
    }
}


export function fetchLocationsData(form) {
    return (dispatch) => {
        
        return fetch('api/locations')
        .then(responseChecker)
        .then(parseToJSON)
        .then((data) => {
            //update the reducer
            dispatch(fetchLocationsDataSuccess(data.locations));
        })
        .catch(err => {
            dispatch(fetchLocationsDataFailure(err));
        });
        
    };
}



function responseChecker(response){
    return response.ok === true;
}

function parseToJSON(response) {
    return response.json();
}