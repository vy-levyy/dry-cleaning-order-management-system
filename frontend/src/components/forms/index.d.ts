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
  }

  interface IInputAuthorizationEmailProps extends IInputProps, Validation { }
  interface IInputAuthorizationPasswordProps extends IInputProps,Validation { }

  interface IInputRegistrationFirstNameProps extends IInputProps, Validation { }
  interface IInputRegistrationLastNameProps extends IInputProps, Validation { }
  interface IInputRegistrationEmailProps extends IInputProps, Validation { }
  interface IInputRegistrationPasswordProps extends  IInputProps,Validation { }
  interface IInputRegistrationConfirmedPasswordProps extends IInputProps,Validation { }
  interface IInputRegistrationWantBeAdminProps extends IInputProps {
    value: boolean;
  }

  interface IInputPasswordRequestUpdateEmailProps extends IInputProps, Validation { }

  interface IInputPasswordUpdatePasswordProps extends IInputProps, Validation { }
  interface IInputPasswordUpdateComfirmedPasswordProps extends IInputProps, Validation { }


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
