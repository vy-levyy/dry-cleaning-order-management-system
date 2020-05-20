export default (inputType: Form.InputTypesPasswordUpdate) => {
  return (state: Redux.State) => {
    const field = state.form.passwordUpdate.fields[inputType];
  
    return {
      value: field.value,
      isValid: field.isValid
    }
  }
}