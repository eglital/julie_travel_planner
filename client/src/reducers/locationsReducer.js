import { FETCH_LOCATIONS_DATA_SUCCESS, FETCH_LOCATIONS_DATA_FAILURE } from '../actions/types';


const INITIAL_STATE = {
    data: {},
    error: null
};


export default function locationsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_LOCATIONS_DATA_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case FETCH_LOCATIONS_DATA_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}