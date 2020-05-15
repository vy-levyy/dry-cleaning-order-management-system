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

const defaultState: Redux.FormStateRegistration = {
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
      value: false,
      isValid: true
    }
  },
  isValid: false
};

export const registrationReducer = (state: Redux.FormStateRegistration = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          firstName: {
            ...state.fields.firstName,
            value: action.payload
          }
        }
      };

    case CHANGE_IS_VALID_FIRST_NAME:
      return {
        ...state,
        fields: {
          ...state.fields,
          firstName: {
            ...state.fields.firstName,
            isValid: action.payload
          }
        }
      };

    case CHANGE_LAST_NAME_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          lastName: {
            ...state.fields.lastName,
            value: action.payload
          }
        }
      };

    case CHANGE_IS_VALID_LAST_NAME:
      return {
        ...state,
        fields: {
          ...state.fields,
          lastName: {
            ...state.fields.lastName,
            isValid: action.payload
          }
        }
      };

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

    case CHANGE_WANT_BE_ADMIN_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          wantBeAdmin: {
            ...state.fields.wantBeAdmin,
            value: action.payload
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
