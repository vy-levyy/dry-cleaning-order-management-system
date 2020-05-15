import React from 'react';
import FormRegistration from './FormRegistration';
import FormAuthorization from './FormAuthorization';

const formElements: Form.Forms = {
  authorization: <FormAuthorization />,
  registration: <FormRegistration />
} as const;

export default formElements;
