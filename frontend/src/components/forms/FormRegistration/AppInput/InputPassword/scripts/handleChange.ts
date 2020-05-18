import isValidInput from "../../scripts/isValidInput";
import isValidForm from "../../../scripts/isValidForm";

export default (
  setValue: (value: string) => any,
  setIsValid: (value: boolean) => any,
  setIsValidConfirmedPassword: (value: boolean) => any,
  setIsValidForm: (value: boolean) => any,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setValue(event.target.value);
  setIsValid(isValidInput('password'));
  setIsValidConfirmedPassword(isValidInput('confirmedPassword'));
  setIsValidForm(isValidForm());
}
