import formActions from "../../../redux/forms/actions"
import { InputOwnProps } from "../../../redux"
import { InputNames } from ".."

const appInputMapDispatchToPropsWrapper = (inputName: InputNames) => {
  return (dispatch: Function, { formName }: InputOwnProps) => {
    return {
      setValue: (value: string) => dispatch(formActions[formName].setValue(inputName, value)),
      setIsValid: (value: boolean) => dispatch(formActions[formName].setIsValid(inputName, value)),
      setIsValidForm: (value: boolean) => dispatch(formActions[formName].setIsValidForm(value))
    }
  }

  // return (dispatch: Function, { formName }: InputOwnProps) => {
  //   return {
  //     setValue: (value: string) => dispatch(formActions[formName].setValue(inputName, value)),
  //     setIsValid: (value: boolean) => dispatch(formActions[formName].setIsValid(inputName, value)),
  //     setIsValidForm: (value: boolean) => dispatch(formActions[formName].setIsValidForm(value)),
  //     setIsValidConfirmedPassword: (value: boolean) => dispatch(formActions[formName].setIsValid('confirmedPassword', value)),
  //   }
  // }
}

export default appInputMapDispatchToPropsWrapper;
