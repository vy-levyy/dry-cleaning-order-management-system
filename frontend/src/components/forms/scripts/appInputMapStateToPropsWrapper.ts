import { InputOwnProps, State } from "../../../redux"
import { InputNames } from ".."

const appInputMapStateToPropsWrapper = (inputName: InputNames) => {
  return (state: State, { formName }: InputOwnProps) => {
    return {
      value: state.form[formName].fields[inputName].value,
      isValid: state.form[formName].fields[inputName].isValid
    }
  }
}

export default appInputMapStateToPropsWrapper;
