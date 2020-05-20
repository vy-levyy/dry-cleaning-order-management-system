import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputProps<Form.InputTypesAuthorization>> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
