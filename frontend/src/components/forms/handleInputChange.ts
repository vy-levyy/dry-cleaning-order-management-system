import { ChangeEvent } from 'react';
import { InputNames } from '.';
import isValidInput from './isValidInput';

const handleInputChange = (event: ChangeEvent<HTMLInputElement>, inputName: InputNames, fieldStates: any) => {
  const value = event.target.value;

  switch (inputName) {
    case 'firstName':
      // fall through
    case 'lastName':
      // fall through
    case 'email': {
      const isValid: boolean = isValidInput(inputName, value);

      fieldStates.setValue(value);
      fieldStates.setIsValid(isValid);
      break;
    }

    // case 'password': {
    //   const isValidPassword: boolean = isValidInput(inputName, value);

    //   fieldStates.setValue(value);
    //   fieldStates.setIsValid(isValidPassword);

    //   const isValidConfirmedPassword: boolean =
    //     isValidInput(inputName, confirmedPassword.value, value);

    //   confirmedPassword.setIsValid(isValidConfirmedPassword);
    //   break;
    // }

    // case 'confirmedPassword': {
    //   const isValid: boolean = isValidInput(inputName, value, password.value);

    //   fieldStates.setValue(value);
    //   fieldStates.setIsValid(isValid);
    // }
    default: {
      break;
    }
  }
  
}

export default handleInputChange;
