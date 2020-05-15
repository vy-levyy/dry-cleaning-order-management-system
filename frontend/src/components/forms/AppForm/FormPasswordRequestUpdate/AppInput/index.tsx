import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputPasswordRequestUpdateProps> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
