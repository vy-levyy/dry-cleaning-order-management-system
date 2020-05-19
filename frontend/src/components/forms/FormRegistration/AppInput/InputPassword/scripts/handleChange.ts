import isValidInput from "../../scripts/isValidInput";
import isValidForm from "../../../scripts/isValidForm";
import formActions from '../../../../../../redux/forms/registration/actions'

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  formActions.setValue('password', event.target.value);
  formActions.setIsValid('password', isValidInput('password'));
  formActions.setIsValid('confirmedPassword', isValidInput('confirmedPassword'));
  formActions.setIsValidForm(isValidForm());
}
export default handleChange;
