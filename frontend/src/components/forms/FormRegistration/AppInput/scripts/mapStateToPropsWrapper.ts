export default (inputType: Form.InputTypesRegistration) => {
  return (state: Redux.State) => {
    const field = state.form.registration.fields[inputType];
  
    return {
      value: field.value,
      isValid: field.isValid
    }
  }
}