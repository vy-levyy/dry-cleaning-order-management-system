import app from "../../../../../state";
import store from "../../../../../store";
import validationSchemas from "../../../scripts/validationSchemas";

type InputNames = Exclude<keyof typeof app.forms.registration.fields, 'wantBeAdmin'>;

export default (inputName: InputNames) => {
  const fields = store.getState().form.registration.fields;
  let isValidInput = null;

  switch (inputName) {
    case 'confirmedPassword':
      isValidInput = () => {
        const { confirmedPassword, password } = fields;
        return confirmedPassword.value === password.value;
      }
      break;
    default:
      isValidInput  = () => {
        const value = fields[inputName].value;
        return validationSchemas[inputName]!.isValidSync(value);
      }
  }

  return isValidInput();
};
