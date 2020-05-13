import { combineReducers } from 'redux';
import formReducer from './forms/reducers';

export default combineReducers({
  form: formReducer
});
