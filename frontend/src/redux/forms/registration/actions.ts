import { InputNames } from "../../../components/forms";
import { RegistrationActionTypes } from "../..";

export const CHANGE_FIRST_NAME_VALUE = 'CHANGE_FIRST_NAME_VALUE';
export const CHANGE_IS_VALID_FIRST_NAME = 'CHANGE_IS_VALID_FIRST_NAME';

export const CHANGE_LAST_NAME_VALUE = 'CHANGE_LAST_NAME_VALUE';
export const CHANGE_IS_VALID_LAST_NAME = 'CHANGE_IS_VALID_LAST_NAME';

export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_IS_VALID_EMAIL = 'CHANGE_IS_VALID_EMAIL';

export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_IS_VALID_PASSWORD = 'CHANGE_IS_VALID_PASSWORD';

export const CHANGE_CONFIRMED_PASSWORD_VALUE = 'CHANGE_CONFIRMED_PASSWORD_VALUE';
export const CHANGE_IS_VALID_CONFIRMED_PASSWORD = 'CHANGE_IS_VALID_CONFIRMED_PASSWORD';

export const CHANGE_WANT_BE_ADMIN_VALUE = 'CHANGE_WANT_BE_ADMIN_VALUE';

export const CHANGE_IS_VALID = 'CHANGE_IS_VALID';

const actionTypes: RegistrationActionTypes = {
  fields: {
    firstName: {
      value: CHANGE_FIRST_NAME_VALUE,
      isValid: CHANGE_IS_VALID_FIRST_NAME
    },
    lastName: {
      value: CHANGE_LAST_NAME_VALUE,
      isValid: CHANGE_IS_VALID_LAST_NAME
    },
    email: {
      value: CHANGE_EMAIL_VALUE,
      isValid: CHANGE_IS_VALID_EMAIL
    },
    password: {
      value: CHANGE_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_PASSWORD
    },
    confirmedPassword: {
      value: CHANGE_CONFIRMED_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_CONFIRMED_PASSWORD
    },
    wantBeAdmin: {
      value: CHANGE_WANT_BE_ADMIN_VALUE,
      isValid: null
    }
  },
  isValid: CHANGE_IS_VALID
}

export default {
  setValue: (inputName: InputNames, value: string | boolean) => ({
      type: actionTypes.fields[inputName].value,
      payload: value
  }),

  setIsValid: (inputName: InputNames, isValid: boolean) => ({
    type: actionTypes.fields[inputName].isValid,
    payload: isValid
  }),

  setIsValidForm: (isValid: boolean) => ({
    type: actionTypes.isValid,
    payload: isValid
  })
}
