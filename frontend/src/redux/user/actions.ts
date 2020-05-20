import { Role } from "../../components/Menu/types";

export const CHANGE_ROLE = 'CHANGE_ROLE';

export const setRole = (value: Role | null) => ({
  type: CHANGE_ROLE,
  payload: value
});

export default {
  setRole
}
