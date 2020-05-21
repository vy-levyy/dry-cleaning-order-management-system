import { combineReducers } from 'redux';
import formReducer from './forms/reducers';
import { userReducer } from './user/reducers';

export default combineReducers({
  user: userReducer,
  form: formReducer
});
