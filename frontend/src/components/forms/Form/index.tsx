import { FunctionComponent } from 'react';
import { IFormProps } from '..';
import formElements from './formElements';

const Form: FunctionComponent<IFormProps> = ({ type }) => {
  return formElements[type];
}

export default Form;
