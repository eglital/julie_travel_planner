import axios from 'axios';
export const ADD_LOCATION_TO_ITINERARY = 'ADD_LOCATION_TO_ITINERARY ';
export const GET_FINAL_ITINERARY = 'GET_FINAL_ITINERARY';
export const SET_DURATION = 'SET_DURATION';
export const SET_FINAL_ITINERARY = 'SET_FINAL_ITINERARY';

export function addLocationToItinerary(location, section, itineraryId) {
  return dispatch => {
    axios
      .put('/api/itinerary/select', {
        location: location,
        itineraryId: itineraryId,
        section: section
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response not ok');
        }
        dispatch(setDuration(response.data));
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  };
}

export function setDuration(data) {
  return {
    type: SET_DURATION,
    data
  };
}

export function getFinalItinerary(itineraryId) {
  return dispatch => {
    axios
      .get(`/api/itinerary/final/${itineraryId}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response not ok');
        }
        dispatch(setFinalItinerary(response.data));
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  };
}

export function setFinalItinerary(data) {
  return {
    type: SET_FINAL_ITINERARY,
    data
  };
}
