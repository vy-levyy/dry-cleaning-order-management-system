type InputTypes = Exclude<Form.InputTypes, 'wantBeAdmin'>;
type TooltipList = Readonly<Record<InputTypes, string>>;

export default (fieldName: InputTypes) => {
  const tooltipList: TooltipList = {
    firstName: 'Min 1 symbol',
    lastName: 'Min 1 symbol',
    email: 'Example: tester@test.com',
    password:
      'Min 6 symbols'
      + '\nMin 1 number'
      + '\nMin 1 up letter'
      + '\nMin 1 low letter'
      + '\nMin 1 spec symbol',
    confirmedPassword: 'Confirm password'
  }

  return tooltipList[fieldName];
}
