import formActions from '../../../../redux/forms/registration/actions';
import isValidInput from '../AppInput/InputConfirmedPassword/scripts/isValidInput';
import isValidForm from './isValidForm';
import formsState from '../../../../state/forms';
import passwordHandleChange from '../AppInput/InputPassword/scripts/handleChange';
import wantBeAdminHandleChange from '../AppInput/InputWantBeAdmin/scripts/handleChange';

type InputTypes = keyof typeof formsState.registration.fields;

const handleChange = (inputType: InputTypes, event: React.ChangeEvent<HTMLInputElement>) => {
  switch (inputType) {
    case 'password':
      passwordHandleChange(event);
      break;
    case 'wantBeAdmin':
      wantBeAdminHandleChange(event);
      break;
    default:
      formActions.setValue(inputType, event.target.value)
      formActions.setIsValid(inputType, isValidInput());
      formActions.setIsValidForm(isValidForm());
  }
}

export default handleChange;
