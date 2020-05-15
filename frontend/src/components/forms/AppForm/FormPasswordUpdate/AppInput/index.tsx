import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputPasswordUpdateProps> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
