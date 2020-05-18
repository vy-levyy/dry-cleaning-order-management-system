const FORM = 'PASSWORD_REQUEST_UPDATE';

export const CHANGE_EMAIL_VALUE = `${FORM}/CHANGE_EMAIL_VALUE`;
export const CHANGE_IS_VALID_EMAIL = `${FORM}/CHANGE_IS_VALID_EMAIL`;

export const CHANGE_IS_VALID = `${FORM}/CHANGE_IS_VALID`;

const actionTypes: Redux.FormActionTypesPasswordRequestUpdate = {
  fields: {
    email: {
      value: CHANGE_EMAIL_VALUE,
      isValid: CHANGE_IS_VALID_EMAIL
    }
  },
  isValid: CHANGE_IS_VALID
}

export default {
  setValue: (inputName: Form.InputTypesPasswordRequestUpdate, value: string) => ({
    type: actionTypes.fields[inputName].value,
    payload: value
  }),
  
  setIsValid: (inputName: Form.InputTypesPasswordRequestUpdate, isValid: boolean) => ({
    type: actionTypes.fields[inputName].isValid,
    payload: isValid
  }),

  setIsValidForm: (isValid: boolean) => ({
    type: actionTypes.isValid,
    payload: isValid
  })
}
