import app from "../../../state";
import store from "../../../store";
import validationSchemas from "../scripts/validationSchemas";

type InputNames = keyof typeof app.forms.authorization.fields;

export default (inputName: InputNames) => {
  const fields = store.getState().form.authorization.fields;
  let isValidInput = null;

  switch (inputName) {
    default:
      isValidInput  = () => {
        const value = fields[inputName].value;
        return validationSchemas[inputName]!.isValidSync(value);
      }
  }

  return isValidInput();
};
