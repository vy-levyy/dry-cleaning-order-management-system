import { FunctionComponent } from 'react';
import { IInputProps } from '..';
import inputs from './inputElements';

const Input: FunctionComponent<IInputProps> = ({ type }) => {
  return inputs[type];
}

export default Input;
