import {
  CHANGE_ROLE
} from "./actions";
import { Role } from "../../types";

type Action = {
  type: string;
  payload: any;
}

const defaultState: { role: Role | null } = {
  role: null
};

export const userReducer = (state: { role: Role | null } = defaultState, action: Action) => {
  switch (action.type) {
    case CHANGE_ROLE:
      return {
        ...state,
        role: action.payload
      };
    }
  
  return state;
}