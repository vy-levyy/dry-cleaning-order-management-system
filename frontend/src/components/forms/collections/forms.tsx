import React from 'react';
import { Forms } from '..';
import AppFormRegistration from '../AppFormRegistration';

const forms: Forms = {
  registration: <AppFormRegistration />,
  authorization: <form></form>,
} as const;

export default forms;
