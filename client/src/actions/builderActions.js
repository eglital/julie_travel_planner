import axios from "axios";
export const ADD_LOCATION_TO_ITINERARY = "ADD_LOCATION_TO_ITINERARY ";

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
        
        return response;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  };
}
