import React from 'react';
import InputPassword from './InputPassword';
import InputConfirmedPassword from './InputConfirmedPassword';

const inputElements: Form.Inputs<Form.InputTypesPasswordUpdate> = {
  password: <InputPassword />,
  confirmedPassword: <InputConfirmedPassword />
};

export default inputElements;
