import {
  InputHTMLAttributes,
  ChangeEventHandler,
  HTMLAttributes
} from 'react';
import * as yup from 'yup';

declare namespace Form {
  type FormNames =
    | 'authorization'
    | 'registration';

  type Forms = {
    [key in FormNames]: JSX.Element;
  };

  type InputNames =
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword';

  type RegistrationInputNames = Extract<
    InputNames,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword'
  >;

  type InputDescriptions = {
    [key in InputNames]: string;
  }

  type RegistrationInputs = {
    [key in RegistrationInputNames]: JSX.Element;
  }

  type RegistrationState = {
    [key in RegistrationInputNames]: string;
  }

  type InputWrappers = {
    [key in InputNames]: JSX.Element;
  }

  type Inputs = {
    [key in InputNames]: JSX.Element;
  }

  type ValidationSchemas = {
    [key in InputNames]: yup.Schema<any> | null;
  }

  interface IFormProps {
    type: FormNames;
  }

  interface IInputProps {
    type: InputNames;
  }
  
  interface IAppFormRegistrationProps extends FormHTMLAttributes<HTMLFormElement> { }

  interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    isValid: boolean;
    setValue: Function;
    setIsValid: Function;
  }

  interface IAppInputFirstNameProps extends IAppInputProps { }
  interface IAppInputLastNameProps extends IAppInputProps { }
  interface IAppInputEmailProps extends IAppInputProps { }
  interface IAppInputPasswordProps extends IAppInputProps { }
  interface IAppInputConfirmedPasswordProps extends IAppInputProps { }
  
  interface IInputWrapperProps { 
    inputName: InputNames;
  }

  type InputValidStatusClass = '' | 'is-valid'| 'is-invalid';
}

export = Form;
export as namespace Form;
