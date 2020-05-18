import store from "../../../../../../store";
import validationSchemas from "../../../../scripts/validationSchemas";

const isValidInput = (): boolean => {
  const value = store.getState().form.registration.fields.lastName.value;
  return validationSchemas.lastName!.isValidSync(value);
}

export default isValidInput;
