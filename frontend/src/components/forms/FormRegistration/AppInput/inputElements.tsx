import React from 'react';
import InputFirstName from './InputFirstName';
import InputLastName from './InputLastName';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputConfirmedPassword from './InputConfirmedPassword';
import InputWantBeAdmin from './InputWantBeAdmin';

const inputElements: Form.Inputs<Form.InputTypesRegistration> = {
  firstName: <InputFirstName />,
  lastName: <InputLastName />,
  email: <InputEmail />,
  password: <InputPassword />,
  confirmedPassword: <InputConfirmedPassword />,
  wantBeAdmin:  <InputWantBeAdmin />
};

export default inputElements;
