import store from "../../../../../../../store";

const isValidInput = (): boolean => {
  const { confirmedPassword, password } = store.getState().form.passwordUpdate.fields;
  return confirmedPassword.value === password.value;
}

export default isValidInput;
