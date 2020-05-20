import React from 'react';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

const inputElements: Form.Inputs<Form.InputTypesAuthorization> = {
  email: <InputEmail />,
  password: <InputPassword />,
};

export default inputElements;
