import React from 'react';
import { Inputs, FormNames } from '..';
import AppInputFirstName from './AppInputFirstName';
import AppInputLastName from './AppInputLastName';
import AppInputEmail from './AppInputEmail';
import AppInputPassword from './AppInputPassword';
import AppInputConfirmedPassword from './AppInputConfirmedPassword';
import AppInputWantBeAdmin from './AppInputWantBeAdmin';

const inputElements = (formName: FormNames) => {
  const inputs: Inputs = {
    firstName: <AppInputFirstName formName={ formName }/>,
    lastName: <AppInputLastName formName={ formName }/>,
    email: <AppInputEmail formName={ formName }/>,
    password: <AppInputPassword formName={ formName }/>,
    confirmedPassword: <AppInputConfirmedPassword formName={ formName }/>,
    wantBeAdmin:  <AppInputWantBeAdmin formName={ formName }/>
  };

  return inputs;
}

export default inputElements;
