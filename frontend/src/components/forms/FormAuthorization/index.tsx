import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../redux';
import FormAuthorization from './FormAuthorization';

const FormAuthorizationContainer: React.FunctionComponent<Form.IFormAuthorizationProps> = ({
  user,
  ...attributes
}) => {
  return (
    <FormAuthorization
      user={ user }
      { ...attributes }
    />
  );
}

const mapStateToProps = (state: State) => {
  const form = state.form.authorization;

  return {
    isValid: form.isValid,
    user: {
      email: String(form.fields.email.value),
      password: String(form.fields.password.value),
    }
  }
}

export default connect(mapStateToProps)(FormAuthorizationContainer);
