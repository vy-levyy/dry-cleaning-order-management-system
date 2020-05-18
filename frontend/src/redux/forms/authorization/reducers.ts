import {
  CHANGE_EMAIL_VALUE,
  CHANGE_IS_VALID_EMAIL,

  CHANGE_PASSWORD_VALUE,
  CHANGE_IS_VALID_PASSWORD,

  CHANGE_IS_VALID
} from "./actions";
import app from '../../../state';

type FormStateAuthorization = typeof app.forms.authorization;

const defaultState: FormStateAuthorization = {
  fields: {
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  },
  isValid: false
};

export const authorizationReducer = (state: FormStateAuthorization = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return getNewFieldState('email', 'value');

    case CHANGE_IS_VALID_EMAIL:
      return getNewFieldState('email', 'isValid');

    case CHANGE_PASSWORD_VALUE:
      return getNewFieldState('password', 'value');
    
    case CHANGE_IS_VALID_PASSWORD:
      return getNewFieldState('password', 'isValid');

    case CHANGE_IS_VALID:
      return getNewFormIsValidState();
  }

  return state;

  function getNewFieldState(
    fieldName: Form.InputTypesAuthorization,
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
