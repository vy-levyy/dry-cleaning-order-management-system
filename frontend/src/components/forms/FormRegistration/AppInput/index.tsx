import { FunctionComponent } from 'react';
import inputElements from './inputElements';
import { IAppInputRegistrationProps } from '../..';

const Input: FunctionComponent<IAppInputRegistrationProps> = ({ appType }) => {
  return inputElements[appType];
}

export default Input;
