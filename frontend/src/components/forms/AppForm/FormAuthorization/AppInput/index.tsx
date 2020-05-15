import inputElements from './inputElements';

const Input: React.FunctionComponent<Form.IAppInputAuthorizationProps> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
