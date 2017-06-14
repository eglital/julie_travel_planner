import axios from 'axios';
export const ADD_LOCATION_TO_ITINERARY = 'ADD_LOCATION_TO_ITINERARY ';
export const GET_FINAL_ITINERARY = 'GET_FINAL_ITINERARY';

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
        console.log('Response to adding location:', response);
        return response;
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
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
        console.log('Response to getting final itinerary:', response);
        return response;
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  };
}
