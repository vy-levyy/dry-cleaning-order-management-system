export default (): string | null => {
  return localStorage.getItem('token');
}
