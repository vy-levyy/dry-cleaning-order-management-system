import { FunctionComponent } from 'react';
import { IFormProps } from '..';
import forms from './formElements';

const Form: FunctionComponent<IFormProps> = ({ type }) => {
  return forms[type];
}

export default Form;
