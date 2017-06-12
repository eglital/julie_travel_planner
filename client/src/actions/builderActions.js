import axios from 'axios';
export const ADD_LOCATION_TO_ITINERARY = 'ADD_LOCATION_TO_ITINERARY ';

export function addLocationToItinerary(location, itineraryId) {
  return dispatch => {
    axios
      .post(`http://localhost:3000/addLocation`, {
        location: location,
        itineraryId: itineraryId
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response not ok');
        }
        return response;
      })
      .then(response => {})
      .catch(function(error) {
        console.log('Error:', error);
      });
  };
}
