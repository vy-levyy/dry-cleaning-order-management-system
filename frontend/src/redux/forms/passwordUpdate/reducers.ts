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
      return {
        ...state,
        fields: {
          ...state.fields,
          password: {
            ...state.fields.password,
            value: action.payload
          }
        }
      };

    case CHANGE_IS_VALID_PASSWORD:
      return {
        ...state,
        fields: {
          ...state.fields,
          password: {
            ...state.fields.password,
            isValid: action.payload
          }
        }
      };

    case CHANGE_CONFIRMED_PASSWORD_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          confirmedPassword: {
            ...state.fields.confirmedPassword,
            value: action.payload
          }
        }
      };

    case CHANGE_IS_VALID_CONFIRMED_PASSWORD:
      return {
        ...state,
        fields: {
          ...state.fields,
          confirmedPassword: {
            ...state.fields.confirmedPassword,
            isValid: action.payload
          }
        }
      };

    case CHANGE_IS_VALID:
      return {
        ...state,
        isValid: action.payload
      };
  }

  return state;
}
