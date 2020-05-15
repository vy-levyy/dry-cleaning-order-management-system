import store from "../../../../../../../store";
import validationSchemas from "../../../../../scripts/validationSchemas";

const isValidInput = (): boolean => {
  const value = store.getState().form.registration.fields.firstName.value;
  return validationSchemas.firstName!.isValidSync(value);
}

export default isValidInput;
