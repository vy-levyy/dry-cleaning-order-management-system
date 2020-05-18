const fieldValue = { value: String() }
const isValidValue = Boolean();
const fieldValueWithValidation = {
  ...fieldValue,
  isValid: isValidValue
}
const wantBeAdmin = { value: Boolean() }

const App = {
  forms: {
    authorization: {
      fields: {
        email: fieldValueWithValidation,
        password: fieldValueWithValidation
      },
      isValid: isValidValue
    },
    registration: {
      fields: {
        firstName: fieldValueWithValidation,
        lastName: fieldValueWithValidation,
        email: fieldValueWithValidation,
        password: fieldValueWithValidation,
        confirmedPassword: fieldValueWithValidation,
        wantBeAdmin: wantBeAdmin
      },
      isValid: isValidValue
    },
    passwordRequestUpdate: {
      fields: {
        email: fieldValueWithValidation
      },
      isValid: isValidValue
    },
    passwordUpdate: {
      fields: {
        password: fieldValueWithValidation,
        confirmedPassword: fieldValueWithValidation
      },
      isValid: isValidValue
    }
  }
}

type RegistrationFields = keyof typeof App.forms.registration.fields
type PasswordUpdateFields = keyof typeof App.forms.passwordUpdate.fields

declare namespace Redux {
  type FormActionTypesRegistration = {
    fields: {
      [key in Exclude<RegistrationFields, 'wantBeAdmin'>]: {
        value: ActionType;
        isValid: ActionType;
      }
    }
    isValid: ActionType;
  }

  type FormActionTypesPasswordUpdate = {
    fields: {
      [key in PasswordUpdateFields]: {
        value: ActionType;
        isValid: ActionType;
      }
    }
    isValid: ActionType;
  }

  type ActionType = string;
}

export default App;
