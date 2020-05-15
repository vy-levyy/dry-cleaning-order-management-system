export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';

const actionTypes: Redux.FormActionTypesPasswordRequestUpdate = {
  fields: {
    email: {
      value: CHANGE_EMAIL_VALUE
    }
  }
}

export default {
  setValue: (inputName: Form.InputTypesPasswordRequestUpdate, value: string| boolean) => ({
      type: actionTypes.fields[inputName].value,
      payload: value
  })
}
