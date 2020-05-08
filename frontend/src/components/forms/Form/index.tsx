import { FunctionComponent } from 'react';
import { IAppFormProps } from '..';
import forms from '../collections/forms';

const AppForm: FunctionComponent<IAppFormProps> = ({ type }) => {
  return forms[type];
}

export default AppForm;
