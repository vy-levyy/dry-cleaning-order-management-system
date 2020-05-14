import React, { FunctionComponent } from 'react'
import { IInputWrapperProps, InputDescriptions } from '..';
import Input from '../Input';

const inputDescriptions: InputDescriptions = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  password: 'Password',
  confirmedPassword: 'Confirm password',
  wantBeAdmin: 'Are you want to be admin?',
}

const InputWrapper: FunctionComponent<IInputWrapperProps> = ({ formName, inputName }) => {
  return (
    <div className="form-group">
      <label>{ inputDescriptions[inputName] }</label>
      <Input formName={ formName } inputName={ inputName } />
    </div>
  );
}

export default InputWrapper;
