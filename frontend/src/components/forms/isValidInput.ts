import validationSchemas from "./collections/validationSchemas";
import { InputNames } from ".";

const isValidInput = (inputName: InputNames, value: string, password?: string): boolean => {
  if (validationSchemas[inputName]) {
    return validationSchemas[inputName]!.isValidSync(value);
  } else if (inputName === 'confirmedPassword') {
    return value === password;
  }

  return true;
}

export default isValidInput;
