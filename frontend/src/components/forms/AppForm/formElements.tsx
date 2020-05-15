import React from 'react';
import FormRegistration from './FormRegistration';
import FormAuthorization from './FormAuthorization';
import FormPasswordRequestUpdate from './FormPasswordRequestUpdate';
import FormPasswordUpdate from './FormPasswordUpdate';

const formElements: Form.Forms = {
  authorization: <FormAuthorization />,
  registration: <FormRegistration />,
  passwordRequestUpdate: <FormPasswordRequestUpdate />,
  passwordUpdate: <FormPasswordUpdate />
} as const;

export default formElements;
