import Form from '../components/forms';

declare namespace Redux {
  type State = {
    form: {
      authorization: FormStateAuthorization;
      registration: FormStateRegistration;
      passwordRequestUpdate: FormStatePasswordRequestUpdate;
    }
  }

  type FormStateAuthorization = {
    fields: {
      [key in Form.InputTypesAuthorization]: {
        value: string;
      }
    }
  };

  type FormStateRegistration = {
    fields: {
      [key in Form.InputTypesRegistration]: {
        value: string | boolean;
        isValid: boolean;
      }
    }
    isValid: boolean;
  };

  type FormStatePasswordRequestUpdate = {
    fields: {
      [key in Form.InputTypesPasswordRequestUpdate]: {
        value: string;
      }
    }
  };

  type FormActionTypes = {
    fields: any;
    isValid: string;
  }

  type FormActionTypesAuthorization = {
    fields: {
      [key in Form.InputTypesAuthorization]: {
        value: string;
      }
    }
  }

  type FormActionTypesRegistration = {
    fields: {
      [key in Form.InputTypesRegistration]: {
        value: string;
        isValid: string | null;
      }
    }
    isValid: string;
  }

  type FormActionTypesPasswordRequestUpdate = {
    fields: {
      [key in Form.InputTypesPasswordRequestUpdate]: {
        value: string;
      }
    }
  }
}

export = Redux;
export as namespace Redux;
