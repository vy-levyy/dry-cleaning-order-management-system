import store from "../../../../../../store";
import validationSchemas from "../../../../scripts/validationSchemas";

const isValidInput = (): boolean => {
  const value = store.getState().form.passwordUpdate.fields.password.value;
  return validationSchemas.password!.isValidSync(value);
}

export default isValidInput;
