import authorizationActions from './authorization/actions';
import registrationActions from './registration/actions';
import passwordRequestUpdateActions from './passwordRequestUpdate/actions';

const formActions = {
  authorization: authorizationActions,
  registration: registrationActions,
  passwordRequestUpdate: passwordRequestUpdateActions
}

export default formActions;
