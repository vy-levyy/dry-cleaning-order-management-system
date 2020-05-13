import validationSchemas from "./validationSchemas";
import store from '../../../store';
import { InputNames, FormNames } from "..";

const isValidInput = (formName: FormNames, inputName: InputNames): boolean => {
  const fields = store.getState().form[formName].fields;

  if (validationSchemas[inputName]) {
    return validationSchemas[inputName]!.isValidSync(fields[inputName].value);
  } else if (inputName === 'confirmedPassword') {
    return fields[inputName].value === fields.password.value;
  }

  return true;
}

export default isValidInput;
