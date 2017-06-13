import axios from 'axios';
export const ADD_LOCATION_TO_ITINERARY = 'ADD_LOCATION_TO_ITINERARY ';

export function addLocationToItinerary(location, section, itineraryId) {
  return dispatch => {
    console.log('Adding to itinerary:');
    console.log('Location:', location);
    console.log('Section:', section);
    console.log('ItineraryId:', itineraryId);

    axios
      .put('/api/itinerary/select', {
        location: location,
        itineraryId: itineraryId,
        selection: section
      })
      .then(response => {
        if (response.status !== 200) {
          console.log("Response wasn't ok");
          throw new Error('Response not ok');
        }
        console.log('Response is ok');
        return response;
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  };
}
