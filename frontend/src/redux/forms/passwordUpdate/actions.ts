export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_IS_VALID_PASSWORD = 'CHANGE_IS_VALID_PASSWORD';

export const CHANGE_CONFIRMED_PASSWORD_VALUE = 'CHANGE_CONFIRMED_PASSWORD_VALUE';
export const CHANGE_IS_VALID_CONFIRMED_PASSWORD = 'CHANGE_IS_VALID_CONFIRMED_PASSWORD';

export const CHANGE_IS_VALID = 'CHANGE_IS_VALID';

const actionTypes: Redux.FormActionTypesPasswordUpdate = {
  fields: {
    password: {
      value: CHANGE_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_PASSWORD
    },
    confirmedPassword: {
      value: CHANGE_CONFIRMED_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_CONFIRMED_PASSWORD
    },
  },
  isValid: CHANGE_IS_VALID
}

export default {
  setValue: (inputName: Form.InputTypesPasswordUpdate, value: string | boolean) => ({
      type: actionTypes.fields[inputName].value,
      payload: value
  }),

  setIsValid: (inputName: Form.InputTypesPasswordUpdate, isValid: boolean) => ({
    type: actionTypes.fields[inputName].isValid,
    payload: isValid
  }),

  setIsValidForm: (isValid: boolean) => ({
    type: actionTypes.isValid,
    payload: isValid
  })
}
