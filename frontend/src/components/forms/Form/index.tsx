import { FunctionComponent, FormHTMLAttributes } from 'react';
import { FormNames } from '..';
import forms from '../collections/forms';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  type: FormNames;
}

const AppForm: FunctionComponent<Props> = ({ type }) => {
  return forms[type];
}

export default AppForm;
