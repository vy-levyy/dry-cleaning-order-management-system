import {
  CHANGE_EMAIL_VALUE,
  CHANGE_IS_VALID_EMAIL,

  CHANGE_PASSWORD_VALUE,
  CHANGE_IS_VALID_PASSWORD,

  CHANGE_IS_VALID
} from "./actions";

const defaultState: Redux.FormStateAuthorization = {
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

export const authorizationReducer = (state: Redux.FormStateAuthorization = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          email: {
            ...state.fields.email,
            value: action.payload
          }
        }
      };

    case CHANGE_IS_VALID_EMAIL:
      return {
        ...state,
        fields: {
          ...state.fields,
          email: {
            ...state.fields.email,
            isValid: action.payload
          }
        }
      };

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

    case CHANGE_IS_VALID:
      return {
        ...state,
        isValid: action.payload
      };
  }

  return state;
}
