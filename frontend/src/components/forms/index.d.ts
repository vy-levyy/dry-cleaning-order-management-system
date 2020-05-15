import {
  InputHTMLAttributes,
  ChangeEventHandler,
  HTMLAttributes
} from 'react';
import * as yup from 'yup';

declare namespace Form {
  type FormTypes = 
    | 'registration'
    | 'authorization'
    | 'passwordRequestUpdate'
    | 'passwordUpdate';

  type Forms = {
    readonly [key in FormTypes]: JSX.Element;
  };


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
    user: Api.UserAuthorization;
  }
  interface IFormRegistrationProps extends IFormProps {
    user: Api.UserRegistration;
    isValid: boolean;
  }
  interface IFormPasswordRequestUpdateProps extends IFormProps {
    user: Api.UserPasswordRequestUpdate;
  }
  interface IFormPasswordUpdateProps extends IFormProps {
    user: Api.UserPasswordUpdate;
    isValid: boolean;
  }
  interface IAppFormProps extends IFormProps {
    appType: FormTypes;
  }


  interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string | boolean;
    setValue: (value: string | boolean) => any;
  }
  interface IInputFirstNameProps extends IInputProps { }
  interface IInputLastNameProps extends IInputProps { }
  interface IInputEmailProps extends IInputProps { }
  interface IInputPasswordProps extends IInputProps { }
  interface IInputConfirmedPasswordProps extends IInputProps { }
  interface IInputWantBeAdminProps extends IInputProps { }

  interface IInputAuthorizationEmailProps extends IInputEmailProps { }
  interface IInputAuthorizationPasswordProps extends IInputPasswordProps { }

  interface IInputValidationProps extends IInputProps {
    isValid: boolean;
    setIsValid: (value: boolean) => any;
    setIsValidForm: (value: boolean) => any;
  }
  interface IInputRegistrationValidationProps extends IInputValidationProps { }
  interface IInputPasswordUpdateValidationProps extends IInputValidationProps { }

  interface IInputRegistrationFirstNameProps extends IInputFirstNameProps, IInputRegistrationValidationProps { }
  interface IInputRegistrationLastNameProps extends IInputLastNameProps, IInputRegistrationValidationProps { }
  interface IInputRegistrationEmailProps extends IInputEmailProps, IInputRegistrationValidationProps { }
  interface IInputRegistrationPasswordProps extends  IInputPasswordProps,IInputRegistrationValidationProps { 
    setIsValidConfirmedPassword: (value: boolean) => any;
  }
  interface IInputRegistrationConfirmedPasswordProps extends IInputConfirmedPasswordProps,IInputRegistrationValidationProps { }
  interface IInputRegistrationWantBeAdminProps extends IInputWantBeAdminProps { }

  interface IInputPasswordRequestUpdateEmailProps extends IInputEmailProps { }

  interface IInputPasswordUpdatePasswordProps extends IInputPasswordProps, IInputPasswordUpdateValidationProps { 
    setIsValidConfirmedPassword: (value: boolean) => any;
  }
  interface IInputPasswordUpdateComfirmedPasswordProps extends IInputConfirmedPasswordProps, IInputPasswordUpdateValidationProps { }


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
