import {
  CHANGE_PASSWORD_VALUE,
  CHANGE_IS_VALID_PASSWORD,

  CHANGE_CONFIRMED_PASSWORD_VALUE,
  CHANGE_IS_VALID_CONFIRMED_PASSWORD,

  CHANGE_IS_VALID
} from "./actions";

const defaultState: Redux.FormStatePasswordUpdate = {
  fields: {
    password: {
      value: '',
      isValid: false
    },
    confirmedPassword: {
      value: '',
      isValid: false
    }
  },
  isValid: false
};

export const passwordUpdateReducer = (state: Redux.FormStatePasswordUpdate = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_PASSWORD_VALUE:
      return getNewFieldState('password', 'value');

    case CHANGE_IS_VALID_PASSWORD:
      return getNewFieldState('password', 'isValid');

    case CHANGE_CONFIRMED_PASSWORD_VALUE:
      return getNewFieldState('confirmedPassword', 'value');

    case CHANGE_IS_VALID_CONFIRMED_PASSWORD:
      return getNewFieldState('confirmedPassword', 'isValid');

    case CHANGE_IS_VALID:
      return getNewFormIsValidState();
  }

  return state;

  function getNewFieldState(
    fieldName: Form.InputTypesPasswordUpdate,
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
