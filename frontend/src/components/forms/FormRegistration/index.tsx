import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../redux';
import FormRegistration from './FormRegistration';

const FormRegistrationContainer: React.FunctionComponent<Form.IFormRegistrationProps> = ({
  isValid,
  user,
  ...attributes
}) => {
  return (
    <FormRegistration
      isValid={ isValid }
      user={ user }
      { ...attributes }
    />
  );
}

const mapStateToProps = (state: State) => {
  const { registration, registration: { fields }} = state.form;

  return {
    isValid: registration.isValid,
    user: {
      firstName: String(fields.firstName.value),
      lastName: String(fields.lastName.value),
      email: String(fields.email.value),
      password: String(fields.password.value),
      wantBeAdmin: Boolean(fields.wantBeAdmin.value),
    }
  }
}

export default connect(mapStateToProps)(FormRegistrationContainer);
