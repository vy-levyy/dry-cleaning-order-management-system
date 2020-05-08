import React, {
    FormHTMLAttributes,
    FunctionComponent,
    useState,
    ChangeEvent
} from 'react';
import InputWrapper from '../InputWrapper';
import formFields from '../collections/inputDescriptions';
// import * as yup from 'yup';
//import validationSchemas from '../collections/validationSchemas';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const AppFormRegistration: FunctionComponent<Props> = ({
  className = '',
  ...otherAttributes
}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    //const isValid: boolean = validationSchemas.textString.isValidSync(event.target.value);

    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleConfirmedPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
  }

  return (
    <form
      className={ `col-10 col-md-8 col-lg-6 col-xl-4 ${ className }` }
      { ...otherAttributes }
    >
      <InputWrapper
        inputName="firstName"
        value={ firstName }
        handleChange={ handleFirstNameChange }
      />
      <InputWrapper
        inputName="lastName"
        value={ lastName }
        handleChange={ handleLastNameChange }
      />
      <InputWrapper
        inputName="email"
        value={ email }
        handleChange={ handleEmailChange }
      />
      <InputWrapper
        inputName="password"
        value={ password }
        handleChange={ handlePasswordChange }
      />
      <InputWrapper
        inputName="confirmedPassword"
        value={ confirmedPassword }
        handleChange={ handleConfirmedPasswordChange }
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AppFormRegistration;
