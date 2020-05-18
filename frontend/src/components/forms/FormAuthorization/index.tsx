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
  const fields = state.form.authorization.fields;

  return {
    user: {
      email: String(fields.email.value),
      password: String(fields.password.value),
    }
  }
}

export default connect(mapStateToProps)(FormAuthorizationContainer);
