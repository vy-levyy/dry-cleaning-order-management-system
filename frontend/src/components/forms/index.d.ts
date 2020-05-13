import {
  InputHTMLAttributes,
  ChangeEventHandler,
  HTMLAttributes
} from 'react';
import * as yup from 'yup';

declare namespace Form {
  type FormNames =
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
    formName: FormNames;
    inputName: InputNames;
  }

  type IInputWrapperProps = IInputProps;

  interface IAppFormRegistrationProps extends FormHTMLAttributes<HTMLFormElement> {
    isValid: boolean;
  }

  interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    isValid: boolean;
    setValue: Function;
    setIsValid: Function;
    setIsValidForm: Function;
    formName: FormNames;
  }

  interface IAppInputFirstNameProps extends IAppInputProps { }
  interface IAppInputLastNameProps extends IAppInputProps { }
  interface IAppInputEmailProps extends IAppInputProps { }
  interface IAppInputPasswordProps extends IAppInputProps { 
    setIsValidConfirmedPassword: Function;
  }
  interface IAppInputConfirmedPasswordProps extends IAppInputProps { }

  type InputValidStatusClass = '' | 'is-valid'| 'is-invalid';
}

export = Form;
export as namespace Form;
