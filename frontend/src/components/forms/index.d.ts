import {
  InputHTMLAttributes,
  ChangeEventHandler,
  HTMLAttributes
} from 'react';
import * as yup from 'yup';

declare namespace Form {
  type InputTypes =
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword'
    | 'wantBeAdmin';
  type InputTypesAuthorization = Extract<
    InputTypes,
    | 'email'
    | 'password'
  >;
  type InputTypesRegistration = Extract<
    InputTypes,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword'
    | 'wantBeAdmin'
  >;
  type InputTypesPasswordRequestUpdate = Extract<
    InputTypes,
    | 'email'
  >;
  type InputTypesPasswordUpdate = Extract<
    InputTypes,
    | 'password'
    | 'confirmedPassword'
  >;

  type Inputs = {
    readonly [key in InputTypes]: JSX.Element;
  }
  type InputsAuthorization = {
    readonly [key in InputTypesAuthorization]: JSX.Element;
  }
  type InputsRegistration = {
    readonly [key in InputTypesRegistration]: JSX.Element;
  }
  type InputsPasswordRequestUpdate = {
    readonly [key in InputTypesPasswordRequestUpdate]: JSX.Element;
  }
  type InputsPasswordUpdate = {
    readonly [key in InputTypesPasswordUpdate]: JSX.Element;
  }


  interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> { }
  interface IFormAuthorizationProps extends IFormProps {
    isValid: boolean;
    user: Api.UserAuthorization;
  }
  interface IFormRegistrationProps extends IFormProps {
    isValid: boolean;
    user: Api.UserRegistration;
  }
  interface IFormPasswordRequestUpdateProps extends IFormProps {
    isValid: boolean;
    user: Api.UserPasswordRequestUpdate;
  }
  interface IFormPasswordUpdateProps extends IFormProps {
    isValid: boolean;
    user: Api.UserPasswordUpdate;
  }


  interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    setValue: (value: string) => any;
  }

  interface IInputValidationProps extends IInputProps {
    isValid: boolean;
    setIsValid: (value: boolean) => any;
    setIsValidForm: (value: boolean) => any;
  }

  interface IInputAuthorizationEmailProps extends IInputProps, IInputValidationProps { }
  interface IInputAuthorizationPasswordProps extends IInputProps,IInputValidationProps { }

  interface IInputRegistrationFirstNameProps extends IInputProps, IInputValidationProps { }
  interface IInputRegistrationLastNameProps extends IInputProps, IInputValidationProps { }
  interface IInputRegistrationEmailProps extends IInputProps, IInputValidationProps { }
  interface IInputRegistrationPasswordProps extends  IInputProps,IInputValidationProps { 
    setIsValidConfirmedPassword: (value: boolean) => any;
  }
  interface IInputRegistrationConfirmedPasswordProps extends IInputProps,IInputValidationProps { }
  interface IInputRegistrationWantBeAdminProps extends IInputProps {
    value: boolean;
    setValue: (value: boolean) => any;
  }

  interface IInputPasswordRequestUpdateEmailProps extends IInputProps, IInputValidationProps { }

  interface IInputPasswordUpdatePasswordProps extends IInputProps, IInputValidationProps { 
    setIsValidConfirmedPassword: (value: boolean) => any;
  }
  interface IInputPasswordUpdateComfirmedPasswordProps extends IInputProps, IInputValidationProps { }


  interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    appType: InputTypes;
  }
  interface IAppInputAuthorizationProps extends IAppInputProps {
    appType: InputTypesAuthorization;
  }
  interface IAppInputRegistrationProps extends IAppInputProps {
    appType: InputTypesRegistration;
  }
  interface IAppInputPasswordRequestUpdateProps extends IAppInputProps {
    appType: InputTypesPasswordRequestUpdate;
  }
  interface IAppInputPasswordUpdateProps extends IAppInputProps {
    appType: InputTypesPasswordUpdate;
  }


  interface IInputWrapperProps {
    appInputType: InputTypes;
  };
  interface IInputWrapperRegistrationProps extends IInputWrapperProps {
    appInputType: InputTypesRegistration;
  }
  interface IInputWrapperAuthorizationProps extends IInputWrapperProps {
    appInputType: InputTypesAuthorization;
  }
  interface IInputWrapperPasswordRequestUpdateProps extends IInputWrapperProps {
    appInputType: InputTypesPasswordRequestUpdate;
  }
  interface IInputWrapperPasswordUpdateProps extends IInputWrapperProps {
    appInputType: InputTypesPasswordUpdate;
  }


  type InputLabels = {
    readonly [key in InputTypes]: string;
  }

  
  type ValidationSchemas = {
    [key in InputTypes]: yup.Schema<any> | null;
  }
}


export = Form;
export as namespace Form;
