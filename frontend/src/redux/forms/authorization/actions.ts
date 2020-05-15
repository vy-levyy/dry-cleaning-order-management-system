export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';

const actionTypes: Redux.FormActionTypesAuthorization = {
  fields: {
    email: {
      value: CHANGE_EMAIL_VALUE
    },
    password: {
      value: CHANGE_PASSWORD_VALUE
    }
  }
}

export default {
  setValue: (inputName: Form.InputTypesAuthorization, value: string| boolean) => ({
      type: actionTypes.fields[inputName].value,
      payload: value
  })
}
