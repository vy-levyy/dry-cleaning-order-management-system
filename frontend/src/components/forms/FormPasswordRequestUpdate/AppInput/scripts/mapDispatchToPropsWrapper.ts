import formActions from "../../../../../redux/forms/actions"

export default (inputType: Form.InputTypesPasswordRequestUpdate) => {
  return (dispatch: Function) => {
    return {
      setValue: (value: string) => dispatch(formActions.passwordRequestUpdate.setValue(inputType, value)),
      setIsValid: (value: boolean) => dispatch(formActions.passwordRequestUpdate.setIsValid(inputType, value)),
      setIsValidForm: (value: boolean) => dispatch(formActions.passwordRequestUpdate.setIsValidForm(value))
    }
  }
}
