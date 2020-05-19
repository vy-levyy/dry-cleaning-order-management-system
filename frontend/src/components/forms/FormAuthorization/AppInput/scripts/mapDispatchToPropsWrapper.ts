import formActions from "../../../../../redux/forms/actions"

export default (inputType: Form.InputTypesAuthorization) => {
  return (dispatch: Function) => {
    return {
      setValue: (value: string) => dispatch(formActions.authorization.setValue(inputType, value)),
      setIsValid: (value: boolean) => dispatch(formActions.authorization.setIsValid(inputType, value)),
      setIsValidForm: (value: boolean) => dispatch(formActions.authorization.setIsValidForm(value))
    }
  }
}
