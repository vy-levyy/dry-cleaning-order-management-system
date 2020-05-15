import Form from '../components/forms';

declare namespace Redux {
  type State = {
    form: {
      authorization: FormStateAuthorization;
      registration: FormStateRegistration;
      passwordRequestUpdate: FormStatePasswordRequestUpdate;
      passwordUpdate: FormStatePasswordUpdate;
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

  type FormStatePasswordUpdate = {
    fields: {
      [key in Form.InputTypesPasswordUpdate]: {
        value: string;
        isValid: boolean;
      }
    }
    isValid: boolean;
  };


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

  type FormActionTypesPasswordUpdate = {
    fields: {
      [key in Form.InputTypesPasswordUpdate]: {
        value: string;
        isValid: string;
      }
    }
    isValid: string;
  }
}

export = Redux;
export as namespace Redux;
