import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization/reducers';
import { registrationReducer } from './registration/reducers';
import { passwordRequestUpdateReducer } from './passwordRequestUpdate/reducers';

export default combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
  passwordRequestUpdate: passwordRequestUpdateReducer
});
