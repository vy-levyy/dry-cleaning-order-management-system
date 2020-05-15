import registrationActions from './registration/actions';
import authorizationActions from './authorization/actions';

const formActions = {
  authorization: authorizationActions,
  registration: registrationActions
}

export default formActions;
