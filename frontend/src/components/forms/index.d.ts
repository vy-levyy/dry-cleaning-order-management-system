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
