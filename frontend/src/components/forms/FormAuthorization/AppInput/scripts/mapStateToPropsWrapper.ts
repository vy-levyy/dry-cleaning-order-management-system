export default (inputType: Form.InputTypesAuthorization) => {
  return (state: Redux.State) => {
    const field = state.form.authorization.fields[inputType];
  
    return {
      value: field.value,
      isValid: field.isValid
    }
  }
}
