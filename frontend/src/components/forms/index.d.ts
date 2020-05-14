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
    | 'confirmedPassword'
    | 'wantBeAdmin';

  type RegistrationInputNames = Extract<
    InputNames,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword'
    | 'wantBeAdmin'
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

  interface IAppFormProps extends FormHTMLAttributes<HTMLFormElement> { }
  interface IAppFormRegistrationProps extends IAppFormProps {
    isValid: boolean;
    user: Api.User;
  }

  interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string | boolean;
    setValue: Function;
  }

  interface IAppInputWithValidationProps extends IAppInputProps {
    isValid: boolean;
    setIsValid: Function;
    setIsValidForm: Function;
    formName: FormNames;
  }

  interface IAppInputWantBeAdminProps extends IAppInputProps {}
  interface IAppInputFirstNameProps extends IAppInputWithValidationProps { }
  interface IAppInputLastNameProps extends IAppInputWithValidationProps { }
  interface IAppInputEmailProps extends IAppInputWithValidationProps { }
  interface IAppInputPasswordProps extends IAppInputWithValidationProps { 
    setIsValidConfirmedPassword: Function;
  }
  interface IAppInputConfirmedPasswordProps extends IAppInputWithValidationProps { }

  type InputValidStatusClass = '' | 'is-valid'| 'is-invalid';
}

export = Form;
export as namespace Form;
