import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization/reducers';
import { registrationReducer } from './registration/reducers';

export default combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer
});
