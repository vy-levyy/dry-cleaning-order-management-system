import React from 'react';
import FormRegistration from './FormRegistration';
import FormAuthorization from './FormAuthorization';
import FormPasswordRequestUpdate from './FormPasswordRequestUpdate';

const formElements: Form.Forms = {
  authorization: <FormAuthorization />,
  registration: <FormRegistration />,
  passwordRequestUpdate: <FormPasswordRequestUpdate />
} as const;

export default formElements;
