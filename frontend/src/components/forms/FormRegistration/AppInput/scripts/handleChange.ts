import {
  setValue,
  setIsValid,
  setWantBeAdminValue,
  setIsValidForm
} from '../../../../../redux/forms/registration/actions';
import isValidInput from './isValidInput';
import isValidForm from '../../scripts/isValidForm';
import formsState from '../../../../../state/forms';

type InputTypes = keyof typeof formsState.registration.fields;

const handleChange = (inputType: InputTypes, event: React.ChangeEvent<HTMLInputElement>) => {
  switch (inputType) {
    case 'wantBeAdmin':
      setWantBeAdminValue(event.target.checked);
      break;
    case 'password':
      setIsValid('confirmedPassword', isValidInput('confirmedPassword'));
      // fall through
    default:
      setValue(inputType, event.target.value)
      setIsValid(inputType, isValidInput(inputType));
      setIsValidForm(isValidForm());
  }
}

export default handleChange;
