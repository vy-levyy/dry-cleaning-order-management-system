import { combineReducers } from 'redux';
import { registrationReducer } from './forms/registration/reducers';

export default combineReducers({
  registration: registrationReducer
});
