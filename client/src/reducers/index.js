import { builder } from './builderReducers';
import { locationsReducer as locations } from './locationsReducer';
import { itineraryReducer as itinerary } from './itineraryReducer';
import { combineReducers } from 'redux';

export default combineReducers({builder, locations, itinerary});