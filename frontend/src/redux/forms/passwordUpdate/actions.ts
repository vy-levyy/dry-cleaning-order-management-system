const FORM = 'PASSWORD_UPDATE';

export const CHANGE_PASSWORD_VALUE = `${FORM}/CHANGE_PASSWORD_VALUE`;
export const CHANGE_IS_VALID_PASSWORD = `${FORM}/CHANGE_IS_VALID_PASSWORD`;

export const CHANGE_CONFIRMED_PASSWORD_VALUE = `${FORM}/CHANGE_CONFIRMED_PASSWORD_VALUE`;
export const CHANGE_IS_VALID_CONFIRMED_PASSWORD = `${FORM}/CHANGE_IS_VALID_CONFIRMED_PASSWORD`;

export const CHANGE_IS_VALID = `${FORM}/CHANGE_IS_VALID`;

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

export const setValue = (inputName: Form.InputTypesPasswordUpdate, value: string | boolean) => ({
  type: actionTypes.fields[inputName].value,
  payload: value
});

export const setIsValid = (inputName: Form.InputTypesPasswordUpdate, isValid: boolean) => ({
  type: actionTypes.fields[inputName].isValid,
  payload: isValid
});

export const setIsValidForm = (isValid: boolean) => ({
  type: actionTypes.isValid,
  payload: isValid
});

export default {
  setValue,
  setIsValid,
  setIsValidForm
}
