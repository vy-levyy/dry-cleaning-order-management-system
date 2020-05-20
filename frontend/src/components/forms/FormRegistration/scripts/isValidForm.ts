import store from "../../../../store";

const isValidForm = (): boolean => {
  const fields = store.getState().form.registration.fields;

  // temp
  if (!fields.firstName.isValid) return false;
  if (!fields.lastName.isValid) return false;
  if (!fields.email.isValid) return false;
  if (!fields.password.isValid) return false;
  if (!fields.confirmedPassword.isValid) return false;

  // for (const field of Object.values(fields)) {
  //   if (!field.isValid) {
  //     return false;
  //   }
  // }

  return true;
}

export default isValidForm;
