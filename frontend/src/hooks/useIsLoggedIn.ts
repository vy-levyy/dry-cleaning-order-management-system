import useGetRole from "./useGetRole";

export default () => {
  const role = useGetRole();

  if (role === null) {
    return role;
  }

  return role !== 'unlogged';
}
