import React from 'react';
import { Forms } from '..';
import AppFormRegistration from './AppFormRegistration';

const formElements: Forms = {
  registration: <AppFormRegistration />
} as const;

export default formElements;
