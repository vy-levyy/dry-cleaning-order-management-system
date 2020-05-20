import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputProps<Form.InputTypesPasswordRequestUpdate>> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
