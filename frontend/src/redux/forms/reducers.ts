import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization/reducers';
import { registrationReducer } from './registration/reducers';
import { passwordRequestUpdateReducer } from './passwordRequestUpdate/reducers';
import { passwordUpdateReducer } from './passwordUpdate/reducers';

export default combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
  passwordRequestUpdate: passwordRequestUpdateReducer,
  passwordUpdate: passwordUpdateReducer
});
