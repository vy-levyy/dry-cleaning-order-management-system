export default (inputType: Form.InputTypesPasswordRequestUpdate) => {
  return (state: Redux.State) => {
    const field = state.form.passwordRequestUpdate.fields[inputType];
  
    return {
      value: field.value,
      isValid: field.isValid
    }
  }
}
