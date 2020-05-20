import authorizationActions from './authorization/actions';
import registrationActions from './registration/actions';
import passwordRequestUpdateActions from './passwordRequestUpdate/actions';
import passwordUpdateActions from './passwordUpdate/actions';

const formActions = {
  authorization: authorizationActions,
  registration: registrationActions,
  passwordRequestUpdate: passwordRequestUpdateActions,
  passwordUpdate: passwordUpdateActions
}

export default formActions;
