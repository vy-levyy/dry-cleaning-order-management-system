import Form from '../components/forms';

declare namespace Redux {
  type State = {
    form: {
      registration: FormRegistrationState;
    }
  }

  type FormRegistrationState = {
    fields: {
      [key in Form.RegistrationInputNames]: {
        value: string | boolean;
        isValid: boolean;
      }
    },
    isValid: boolean;
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
