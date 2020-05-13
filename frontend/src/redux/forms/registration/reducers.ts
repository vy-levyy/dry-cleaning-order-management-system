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
  CHANGE_IS_VALID_CONFIRMED_PASSWORD
} from "./actions";
//import { RegistrationState } from "../../../components/forms";

const defaultState = {
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
};

export const registrationReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME_VALUE:
      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.payload
        }
      };

    case CHANGE_IS_VALID_FIRST_NAME:
      return {
        ...state,
        firstName: {
          ...state.firstName,
          isValid: action.payload
        }
      };

    case CHANGE_LAST_NAME_VALUE:
      return {
        ...state,
        lastName: {
          ...state.lastName,
          value: action.payload
        }
      };

    case CHANGE_IS_VALID_LAST_NAME:
      return {
        ...state,
        lastName: {
          ...state.lastName,
          isValid: action.payload
        }
      };

    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload
        }
      };

    case CHANGE_IS_VALID_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          isValid: action.payload
        }
      };

    case CHANGE_PASSWORD_VALUE:
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload
        }
      };

    case CHANGE_IS_VALID_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          isValid: action.payload
        }
      };

    case CHANGE_CONFIRMED_PASSWORD_VALUE:
      return {
        ...state,
        confirmedPassword: {
          ...state.confirmedPassword,
          value: action.payload
        }
      };

    case CHANGE_IS_VALID_CONFIRMED_PASSWORD:
      return {
        ...state,
        confirmedPassword: {
          ...state.confirmedPassword,
          isValid: action.payload
        }
      };
  }

  return state;
}
