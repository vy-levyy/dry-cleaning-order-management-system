import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputProps<Form.InputTypesPasswordUpdate>> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
