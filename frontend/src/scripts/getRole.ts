import { Role } from "../types";
import { useSelector } from "react-redux";

export default (): Role | null => {
  return useSelector((state: { user: { role: Role | null } }) => state.user.role);
}
