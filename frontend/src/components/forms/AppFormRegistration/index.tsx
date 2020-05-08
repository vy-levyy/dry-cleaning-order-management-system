import React, {
    FormHTMLAttributes,
    FunctionComponent,
    ChangeEvent
} from 'react';
import InputWrapper from '../InputWrapper';
import isValidInput from '../isValidInput';
import useInputState from '../hooks/useInputState';
import handleInputChange from '../handleInputChange';
import { IAppFormRegistrationProps } from '..';

const AppFormRegistration: FunctionComponent<IAppFormRegistrationProps> = ({
  className = '',
  ...otherAttributes
}) => {
  const firstNameStates = useInputState();
  const lastNameStates = useInputState();
  const emailStates = useInputState();
  const password = useInputState();
  const confirmedPassword = useInputState();

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidPassword: boolean = isValidInput('password', value);

    password.setValue(value);
    password.setIsValid(isValidPassword);

    const isValidConfirmedPassword: boolean =
      isValidInput('confirmedPassword', confirmedPassword.value, value);

    confirmedPassword.setIsValid(isValidConfirmedPassword);
  }

  const handleConfirmedPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValid: boolean = isValidInput('confirmedPassword', value, password.value);

    confirmedPassword.setValue(value);
    confirmedPassword.setIsValid(isValid);
  }

  return (
    <form
      className={ `col-10 col-md-8 col-lg-6 col-xl-4 ${ className }` }
      { ...otherAttributes }
    >
      <InputWrapper
        inputName="firstName"
        value={ firstNameStates.value }
        isValid={ firstNameStates.isValid }
        handleChange={ (event) => handleInputChange(event, 'firstName', firstNameStates) }
      />
      <InputWrapper
        inputName="lastName"
        value={ lastNameStates.value }
        isValid={ lastNameStates.isValid  }
        handleChange={ (event) => handleInputChange(event, 'lastName', lastNameStates) }
      />
      <InputWrapper
        inputName="email"
        value={ emailStates.value }
        isValid={ emailStates.isValid  }
        handleChange={ (event) => handleInputChange(event, 'email', emailStates) }
      />
      <InputWrapper
        inputName="password"
        value={ password.value }
        isValid={ password.isValid  }
        handleChange={ handlePasswordChange }
      />
      <InputWrapper
        inputName="confirmedPassword"
        value={ confirmedPassword.value }
        isValid={ confirmedPassword.isValid }
        handleChange={ handleConfirmedPasswordChange }
      />
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default AppFormRegistration;
