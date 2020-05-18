import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputProps<Form.InputTypesRegistration>> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
