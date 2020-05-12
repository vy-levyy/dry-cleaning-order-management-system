import React, {
  FunctionComponent,
} from 'react';
import InputWrapper from '../../InputWrapper';
import { IAppFormRegistrationProps } from '../..';

const AppFormRegistration: FunctionComponent<IAppFormRegistrationProps> = ({ ...attributes }) => {
  return (
    <form
      className={ 'col-10 col-md-8 col-lg-6 col-xl-4' }
      { ...attributes }
    >
      <InputWrapper inputName="firstName" />
      <InputWrapper inputName="lastName" />
      <InputWrapper inputName="email" />
      <InputWrapper inputName="password" />
      <InputWrapper inputName="confirmedPassword" />
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default AppFormRegistration;
