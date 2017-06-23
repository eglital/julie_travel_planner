import {
  SET_ITINERARY_DATA,
  SET_FINAL_ITINERARY,
  CHANGE_TRANSPORTATION_MODE
} from './types';
import itineraryHelper from '../helpers/itineraryHelper';
import { setDuration, changeLastFood } from './builderActions';
import { deleteLocationsData } from './locationsActions';
import axios from 'axios';

export function setItineraryData(data) {
  return {
    type: SET_ITINERARY_DATA,
    data
  };
}

export function getFinalItinerary(itineraryId, history) {
  let qs = localStorage.getItem('facebookAuth');
  return dispatch => {
    axios
      .get(`/api/itinerary/final/${itineraryId}?facebookjwt=${qs}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response not ok');
        }
        itineraryHelper.setItineraryObj(itineraryId);
        dispatch(
          setFinalItinerary({
            itinerary: response.data.itinerary
          })
        );
        history.push(`/itinerary-overview/${itineraryId}`);
        dispatch(setDuration({ duration: 0 }));
        dispatch(deleteLocationsData());
        dispatch(changeLastFood(false));
      })
      .catch(function(error) {});
  };
}

export function setFinalItinerary(data) {
  return {
    type: SET_FINAL_ITINERARY,
    data
  };
}

export function getSavedItinerary(itineraryId) {
  return dispatch => {
    axios
      .get(`/api/itinerary/saved/${itineraryId}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response not ok');
        }
        dispatch(
          setFinalItinerary({
            itinerary: response.data.itinerary
          })
        );
      })
      .catch(function(error) {});
  };
}

export function changeTransportationMode(data) {
  return {
    type: CHANGE_TRANSPORTATION_MODE,
    data
  };
}
