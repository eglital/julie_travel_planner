import deepFreeze from 'deep-freeze';
import { SET_ITINERARY_ID } from '../actions/types';
import { itineraryReducer } from '../reducers/itineraryReducer';

it("updates the itinerary id", function() {
    const initialState = {
        id: null
    }
    const action = {
        type: SET_ITINERARY_ID,
        data: 3
    }
    const finalState = {
        id: 3
    }
    deepFreeze(initialState);
    deepFreeze(action);
    
    expect(itineraryReducer(initialState, action)).toEqual(finalState);
})

import {setItineraryId} from '../actions/itineraryActions.js';


it("create action object", function() {
    const actionObj = {
        type: SET_ITINERARY_ID,
        data: 3
    }
    
    expect(setItineraryId(3)).toEqual(actionObj);
    
    
})