import app from "../../../../../state";
import store from "../../../../../store";
import validationSchemas from "../../../scripts/validationSchemas";
import isValidConfirmedPassword from '../InputConfirmedPassword/scripts/isValidInput';

type InputNames = Exclude<keyof typeof app.forms.registration.fields, 'wantBeAdmin'>;

export default (inputName: InputNames) => {
  let isValidInput = null;

  switch (inputName) {
    case 'confirmedPassword':
      isValidInput = isValidConfirmedPassword;
      break;
    default:
      isValidInput  = () => {
        const value = store.getState().form.registration.fields[inputName].value;
        return validationSchemas[inputName]!.isValidSync(value);
      }
  }
  

  return isValidInput();
};
