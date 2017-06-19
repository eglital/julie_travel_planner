import deepFreeze from 'deep-freeze';
import { SET_ITINERARY_DATA, CHANGE_TRANSPORTATION_MODE } from '../actions/types';
import { itineraryReducer } from '../reducers/itineraryReducer';

it("updates the itinerary id", function() {
    const initialState = {
        id: null,
        startTime: null,
        endTime: null
    }
    const action = {
        type: SET_ITINERARY_DATA,
        data: {
            id: 3,
            startTime: 0,
            endTime: 0
        }
    }
    const finalState = {
        id: 3,
        startTime: 0,
        endTime: 0
    }
    deepFreeze(initialState);
    deepFreeze(action);
    
    expect(itineraryReducer(initialState, action)).toEqual(finalState);
})

import {setItineraryData} from '../actions/itineraryActions.js';


it("create action object", function() {
    const actionObj = {
        type: SET_ITINERARY_DATA,
        data: 3
    }
    
    expect(setItineraryData(3)).toEqual(actionObj);
    
    
})

it("updates transporation mode", function() {
    const initialState = {
        transportationMode: "walking"
    }
    const action = {
        type: CHANGE_TRANSPORTATION_MODE,
        data: "driving"
    }
    const finalState = {
        transportationMode: "driving"
    }
    
    deepFreeze(initialState);
    deepFreeze(action);
    expect(itineraryReducer(initialState, action)).toEqual(finalState);
})

import {changeTransportationMode} from '../actions/itineraryActions';

it("creates transportation action", function() {
    const actionObj = {
        type: CHANGE_TRANSPORTATION_MODE,
        data: "driving"
    }
    deepFreeze(actionObj);
    
    expect(changeTransportationMode("driving")).toEqual(actionObj);
})