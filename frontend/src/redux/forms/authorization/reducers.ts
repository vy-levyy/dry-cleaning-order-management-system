import {
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
} from "./actions";

const defaultState: Redux.FormStateAuthorization = {
  fields: {
    email: {
      value: ''
    },
    password: {
      value: ''
    }
  }
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
  }

  return state;
}
