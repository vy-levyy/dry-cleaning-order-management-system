import { combineReducers } from 'redux';
import { registrationReducer } from './registration/reducers';

export default combineReducers({
  registration: registrationReducer
});
