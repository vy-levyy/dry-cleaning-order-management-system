const FORM = 'AUTHORIZATION';

export const CHANGE_EMAIL_VALUE = `${FORM}/CHANGE_EMAIL_VALUE`;
export const CHANGE_IS_VALID_EMAIL = `${FORM}/CHANGE_IS_VALID_EMAIL`;

export const CHANGE_PASSWORD_VALUE = `${FORM}/CHANGE_PASSWORD_VALUE`;
export const CHANGE_IS_VALID_PASSWORD = `${FORM}/CHANGE_IS_VALID_PASSWORD`;

export const CHANGE_IS_VALID = `${FORM}/CHANGE_IS_VALID`;

type FormActionTypesAuthorization = {
  fields: {
    [key in Form.InputTypesAuthorization]: {
      value: string;
      isValid: string;
    }
  },
  isValid: string;
}

const actionTypes: FormActionTypesAuthorization = {
  fields: {
    email: {
      value: CHANGE_EMAIL_VALUE,
      isValid: CHANGE_IS_VALID_EMAIL
    },
    password: {
      value: CHANGE_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_PASSWORD
    }
  },
  isValid: CHANGE_IS_VALID
}

export default {
  setValue: (inputName: Form.InputTypesAuthorization, value: string | boolean) => ({
    type: actionTypes.fields[inputName].value,
    payload: value
  }),

  setIsValid: (inputName: Form.InputTypesAuthorization, isValid: boolean) => ({
    type: actionTypes.fields[inputName].isValid,
    payload: isValid
  }),

  setIsValidForm: (isValid: boolean) => ({
    type: actionTypes.isValid,
    payload: isValid
  })
}
