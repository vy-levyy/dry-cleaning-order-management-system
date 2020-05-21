import getRole from "./getRole";

export default () => {
  const role = getRole();
  return (role !== null && role !== 'unlogged');
}
