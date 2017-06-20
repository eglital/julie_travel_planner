import deepFreeze from "deep-freeze";
import { userItinerariesReducer } from '../reducers/userItinerariesReducer';
import { FETCH_USER_ITINERARIES_SUCCESS } from '../actions/types';

it("replaces all the itineraries in the reducer", function() {
    const initialState = {
        data: [],
    }
    const action = {
        type: FETCH_USER_ITINERARIES_SUCCESS,
        data: ['banana', 'banana2']
    }
    const finalState = {
        data: ['banana', 'banana2']
    }
    
    deepFreeze(initialState);
    deepFreeze(action);
    
    expect(userItinerariesReducer(initialState, action)).toEqual(finalState);
})

import { userItinerariesSuccess } from '../actions/userItinerariesActions';

it("creates a fetch success action obj", function() {
    const actionObj = {
        type: FETCH_USER_ITINERARIES_SUCCESS,
        data: ['bananas']
    };
    expect(userItinerariesSuccess(['bananas'])).toEqual(actionObj);
})


import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
import fetchMock from 'fetch-mock'
import { fetchUserItinerariesData } from '../actions/userItinerariesActions';

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
    })
    it('dispatches FETCH_USER_ITINERARIES_SUCCESS on 200 response from server', () => {
        fetchMock.get(`/api/user/itineraries`, {
            status: 200,
            body: {
                userItineraries: ['booboo', 'heheheh']
            }
        })
        const expectedActions = [
        {
            type: FETCH_USER_ITINERARIES_SUCCESS,
            data: ['booboo', 'heheheh']
        }]
        const store = mockStore({
            userItineraries: {}
        })

        return store.dispatch(fetchUserItinerariesData()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
