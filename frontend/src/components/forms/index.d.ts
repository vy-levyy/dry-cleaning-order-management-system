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
    [key in InputNames]: {
      name: string;
      type: string;
      tooltip: string;
      className: string;
    }
  }

  type RegistrationInputs = {
    [key in RegistrationInputNames]: JSX.Element;
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

  interface IAppFormProps extends FormHTMLAttributes<HTMLFormElement> {
    type: FormNames;
  }

  interface IAppFormRegistrationProps extends FormHTMLAttributes<HTMLFormElement> {
    className?: string;
  }

  interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputName: InputNames;
    isValid: boolean;
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
  }

  interface IInputWrapperProps extends IAppInputProps { }

  type InputValidStatusClass = '' | 'is-valid'| 'is-invalid';
}

export = Form;
export as namespace Form;
