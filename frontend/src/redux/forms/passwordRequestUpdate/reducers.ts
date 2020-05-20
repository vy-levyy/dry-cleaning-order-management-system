import {
  CHANGE_EMAIL_VALUE,
  CHANGE_IS_VALID_EMAIL,

  CHANGE_IS_VALID
} from "./actions";
import app from '../../../state';

type FormStatePasswordRequestUpdate = typeof app.forms.passwordRequestUpdate;

const defaultState: FormStatePasswordRequestUpdate = {
  fields: {
    email: {
      value: '',
      isValid: false
    }
  },
  isValid: false
};

export const passwordRequestUpdateReducer = (state: FormStatePasswordRequestUpdate = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return getNewFieldState('email', 'value');

    case CHANGE_IS_VALID_EMAIL:
      return getNewFieldState('email', 'isValid');

    case CHANGE_IS_VALID:
      return getNewFormIsValidState();
  }

  return state;

  function getNewFieldState(
    fieldName: Form.InputTypesPasswordRequestUpdate,
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
