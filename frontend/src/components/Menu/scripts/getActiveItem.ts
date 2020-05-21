import items from './items';
import { ItemName } from "../types"
import { useLocation } from "react-router";

export default (): ItemName | null => {
  let activeItemName = null;
  const { pathname } = useLocation();

  Object.entries(items).forEach((item) => {
    if (pathname.slice(1) === item[1].link) {
      activeItemName = item[1].name;
    }
  });

  return activeItemName;
}
