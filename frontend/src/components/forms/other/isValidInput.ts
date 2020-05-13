import validationSchemas from "./validationSchemas";
import store from '../../../store';
import { InputNames } from "..";

// const isValidInput = (inputName: InputNames, value: string, password?: string): boolean => {
//   if (validationSchemas[inputName]) {
//     return validationSchemas[inputName]!.isValidSync(value);
//   } else if (inputName === 'confirmedPassword') {
//     return value === password;
//   }

//   return true;
// }

const isValidInput = (inputName: InputNames): boolean => {
  const { form: { registration } } = store.getState();

  if (validationSchemas[inputName]) {
    return validationSchemas[inputName]!.isValidSync(registration[inputName].value);
  } else if (inputName === 'confirmedPassword') {
    return registration[inputName].value === registration.password.value;
  }

  return true;
}

export default isValidInput;
