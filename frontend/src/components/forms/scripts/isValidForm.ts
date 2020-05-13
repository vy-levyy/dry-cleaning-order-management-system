import store from '../../../store';
import {  FormNames } from "..";

const isValidForm = (formName: FormNames): boolean => {
  const fields = store.getState().form[formName].fields;

  for (const value of Object.values(fields)) {
    if (!value.isValid) {
      return false;
    }
  }

  return true;
}

export default isValidForm;
