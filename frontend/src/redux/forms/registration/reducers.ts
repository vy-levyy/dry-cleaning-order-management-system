import {
  CHANGE_FIRST_NAME_VALUE,
  CHANGE_IS_VALID_FIRST_NAME,

  CHANGE_LAST_NAME_VALUE,
  CHANGE_IS_VALID_LAST_NAME,

  CHANGE_EMAIL_VALUE,
  CHANGE_IS_VALID_EMAIL,

  CHANGE_PASSWORD_VALUE,
  CHANGE_IS_VALID_PASSWORD,

  CHANGE_CONFIRMED_PASSWORD_VALUE,
  CHANGE_IS_VALID_CONFIRMED_PASSWORD,

  CHANGE_WANT_BE_ADMIN_VALUE,

  CHANGE_IS_VALID
} from "./actions";
import app from '../../../state';

type FormStateRegistration = typeof app.forms.registration;

const defaultState: FormStateRegistration = {
  fields: {
    firstName: {
      value: '',
      isValid: false
    },
    lastName: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
    confirmedPassword: {
      value: '',
      isValid: false
    },
    wantBeAdmin: {
      value: false
    }
  },
  isValid: false
};

export const registrationReducer = (
  state: FormStateRegistration = defaultState,
  action: { type: string, payload: any }) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME_VALUE:
      return getNewFieldState('firstName', 'value');

    case CHANGE_IS_VALID_FIRST_NAME:
      return getNewFieldState('firstName', 'isValid');

    case CHANGE_LAST_NAME_VALUE:
      return getNewFieldState('lastName', 'value');

    case CHANGE_IS_VALID_LAST_NAME:
      return getNewFieldState('lastName', 'isValid');

    case CHANGE_EMAIL_VALUE:
      return getNewFieldState('email', 'value');

    case CHANGE_IS_VALID_EMAIL:
      return getNewFieldState('email', 'isValid');

    case CHANGE_PASSWORD_VALUE:
      return getNewFieldState('password', 'value');

    case CHANGE_IS_VALID_PASSWORD:
      return getNewFieldState('password', 'isValid');

    case CHANGE_CONFIRMED_PASSWORD_VALUE:
      return getNewFieldState('confirmedPassword', 'value');

    case CHANGE_IS_VALID_CONFIRMED_PASSWORD:
      return getNewFieldState('confirmedPassword', 'isValid');

    case CHANGE_WANT_BE_ADMIN_VALUE:
      return getNewFieldState('wantBeAdmin', 'value');

    case CHANGE_IS_VALID:
      return getNewFormIsValidState();
  }

  return state;

  function getNewFieldState(
    fieldName: Form.InputTypesRegistration,
    fieldState: 'value' | 'isValid'
  ) {
    return {
      ...state,
      fields: {
        ...state.fields,
        [fieldName]: {
          ...state.fields[fieldName],
          [fieldState]: action.payload
        }
      }
    };
  }

  function getNewFormIsValidState() {
    return {
      ...state,
      isValid: action.payload
    }
  }
}
