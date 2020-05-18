import store from "../../../../../../store";
import validationSchemas from "../../../../scripts/validationSchemas";

const isValidInput = (): boolean => {
  const value = store.getState().form.authorization.fields.email.value;
  return validationSchemas.email!.isValidSync(value);
}

export default isValidInput;
