import app from '../../../state';
import store from '../../../store';

// временно без формы registration
type FormNames = Exclude<keyof typeof app.forms, 'registration'>;

export default (formName: FormNames) => {
  const isValidForm = (): boolean => {
    const fields = store.getState().form[formName].fields;

    for (const field of Object.values(fields)) {
      if (!field.isValid) {
        return false;
      }
    }

    return true;
  }

  return isValidForm();
}