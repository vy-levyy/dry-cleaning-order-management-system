import app from '../../state';
import * as yup from 'yup';

declare namespace Form {
  type InputTypes =
  | InputTypesAuthorization
  | InputTypesRegistration
  | InputTypesPasswordRequestUpdate
  | InputTypesPasswordUpdate

  type InputTypesAuthorization = keyof typeof app.forms.authorization.fields
  type InputTypesRegistration = keyof typeof app.forms.registration.fields
  type InputTypesPasswordRequestUpdate = keyof typeof app.forms.passwordRequestUpdate.fields
  type InputTypesPasswordUpdate = keyof typeof app.forms.passwordUpdate.fields

  type Inputs<T extends InputTypes> = Readonly<Record<T, JSX.Element>>;

  interface Validation {
    isValid: boolean;
  }

  interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> { }
  interface IFormAuthorizationProps extends IFormProps, Validation {
    user: Api.UserAuthorization;
  }
  interface IFormRegistrationProps extends IFormProps, Validation {
    user: Api.UserRegistration;
  }
  interface IFormPasswordRequestUpdateProps extends IFormProps, Validation {
    user: Api.UserPasswordRequestUpdate;
  }
  interface IFormPasswordUpdateProps extends IFormProps, Validation {
    user: Api.UserPasswordUpdate;
  }


  interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    setValue: (value: string) => any;
  }

  interface IInputValidationProps extends IInputProps, Validation {
    setIsValid: (value: boolean) => any;
    setIsValidForm: (value: boolean) => any;
  }

  interface IInputAuthorizationEmailProps extends IInputValidationProps { }
  interface IInputAuthorizationPasswordProps extends IInputValidationProps { }

  interface IInputRegistrationFirstNameProps extends IInputValidationProps { }
  interface IInputRegistrationLastNameProps extends IInputValidationProps { }
  interface IInputRegistrationEmailProps extends IInputValidationProps { }
  interface IInputRegistrationPasswordProps extends  IInputValidationProps {
    setIsValidConfirmedPassword: (value: boolean) => any;
  }
  interface IInputRegistrationConfirmedPasswordProps extends IInputValidationProps { }
  interface IInputRegistrationWantBeAdminProps extends IInputProps {
    value: boolean;
    setValue: (value: boolean) => any;
  }

  interface IInputPasswordRequestUpdateEmailProps extends IInputValidationProps { }

  interface IInputPasswordUpdatePasswordProps extends IInputValidationProps {
    setIsValidConfirmedPassword: (value: boolean) => any;
  }
  interface IInputPasswordUpdateComfirmedPasswordProps extends IInputValidationProps { }


  interface IAppInputProps<T extends InputTypes> extends React.InputHTMLAttributes<HTMLInputElement> {
    appType: T;
  }

  interface IAppInputWrapperProps<T extends InputTypes> extends React.InputHTMLAttributes<HTMLInputElement> {
    appInputType: T;
  };

  type InputLabels = {
    readonly [key in InputTypes]: string;
  }
  
  type ValidationSchemas = {
    [key in InputTypes]: yup.Schema<any> | null;
  }
}


export = Form;
export as namespace Form;
