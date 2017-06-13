import { builder } from './builderReducers';
import { locationsReducer as locations } from './locationsReducer';
import { combineReducers } from 'redux';

export default combineReducers({builder, locations});