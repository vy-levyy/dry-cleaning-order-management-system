import { FunctionComponent } from 'react';
import { IInputProps } from '..';
import inputElements from './inputElements';

const Input: FunctionComponent<IInputProps> = ({ formName, inputName }) => {
  return inputElements(formName)[inputName];
}

export default Input;
