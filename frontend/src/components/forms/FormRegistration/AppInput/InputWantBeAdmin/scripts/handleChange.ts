export default (
  setValue: (value: boolean) => any,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setValue(event.target.checked);
}
