import {
  CHANGE_EMAIL_VALUE
} from "./actions";

const defaultState: Redux.FormStatePasswordRequestUpdate = {
  fields: {
    email: {
      value: ''
    }
  }
};

export const passwordRequestUpdateReducer = (state: Redux.FormStatePasswordRequestUpdate = defaultState, action: any) => {
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
  }

  return state;
}
