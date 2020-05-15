import Form from '../components/forms';

declare namespace Redux {
  type State = {
    form: {
      authorization: FormStateAuthorization;
      registration: FormStateRegistration;
    }
  }

  type FormState = {
    isValid: boolean;
  }

  type FormStateAuthorization = {
    fields: {
      [key in Form.InputTypesAuthorization]: {
        value: string;
        isValid: boolean;
      }
    }
  } & FormState;

  type FormStateRegistration = {
    fields: {
      [key in Form.InputTypesRegistration]: {
        value: string | boolean;
        isValid: boolean;
      }
    }
  } & FormState;

  type FormActionTypes = {
    fields: any;
    isValid: string;
  }

  type AuthorizationActionTypes = {
    fields: {
      [key in Form.AuthorizationInputNames]: {
        value: string;
        isValid: string;
      }
    }
    isValid: string;
  }

  type RegistrationActionTypes = {
    fields: {
      [key in Form.RegistrationInputNames]: {
        value: string;
        isValid: string | null;
      }
    }
    isValid: string;
  }

  type InputOwnProps = {
    formName: Form.FormNames;
  }
}

export = Redux;
export as namespace Redux;
