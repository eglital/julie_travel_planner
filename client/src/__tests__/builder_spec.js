import deepFreeze from "deep-freeze";
import { SET_DURATION, TOGGLE_MEALS_INCLUSION } from "../actions/types";
import { builder } from "../reducers/builderReducers";
it("toggles whether or not to include meals true -> false.", function() {
  const initialState = {
    mealsIncluded: true
  }
  const action = {
    type: TOGGLE_MEALS_INCLUSION
  }
  const finalState = {
    mealsIncluded: false
  }
  deepFreeze(initialState);
  deepFreeze(action);

  expect(builder(initialState, action)).toEqual(finalState);
})

it("toggles whether or not to include meals. false -> true", function() {
  const initialState = {
    mealsIncluded: false
  }
  const action = {
    type: TOGGLE_MEALS_INCLUSION
  }
  const finalState = {
    mealsIncluded: true
  }
  deepFreeze(initialState);
  deepFreeze(action);

  expect(builder(initialState, action)).toEqual(finalState);
})

import {toggleMealsInclusion} from '../actions/builderActions';

it("builds the include meals action obj", function() {
  const actionObj = {
    type: TOGGLE_MEALS_INCLUSION
  };
  expect(toggleMealsInclusion()).toEqual(actionObj);
});




it("updates the current duration", () => {
  const initialState = {
    duration: 0
  };
  const action = {
    type: SET_DURATION,
    data: {
      duration: 1234
    }
  };
  const finalState = {
    duration: 1234
  };
  deepFreeze(initialState);
  deepFreeze(action);

  expect(builder(initialState, action)).toEqual(finalState);
});

import { setDuration } from "../actions/builderActions.js";

it("creates action object", () => {
  const actionObj = {
    type: SET_DURATION,
    data: 1234
  };
  expect(setDuration(1234)).toEqual(actionObj);
});

// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// import fetchMock from "fetch-mock";
// import { addLocationToItinerary } from "../actions/builderActions";

// describe("async updating duration action", () => {
//   afterEach(() => fetchMock.reset());
//   it("creates SET DURATION upon successful status", () => {
//     fetchMock.put("/api/itinerary/select", {
//       status: 200,
//       body: { duration: 1234 }
//     });
//     const expectedActions = [{ type: SET_DURATION, data: 1234 }];
//     const store = mockStore({ builder: {} });
//     return store.dispatch(addLocationToItinerary()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
