import React from 'react';
import { Inputs } from '..';
import AppInputFirstName from './AppInputFirstName';
import AppInputLastName from './AppInputLastName';
import AppInputEmail from './AppInputEmail';
import AppInputPassword from './AppInputPassword';
import AppInputConfirmedPassword from './AppInputConfirmedPassword';

const inputs: Inputs = {
  firstName: <AppInputFirstName />,
  lastName: <AppInputLastName />,
  email: <AppInputEmail />,
  password: <AppInputPassword />,
  confirmedPassword: <AppInputConfirmedPassword />
};

export default inputs;

