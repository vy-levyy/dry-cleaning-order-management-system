import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../redux';
import FormPasswordUpdate from './FormPasswordUpdate';

const FormPasswordUpdateContainer: React.FunctionComponent<Form.IFormPasswordUpdateProps> = ({
  user,
  ...attributes
}) => {
  return (
    <FormPasswordUpdate
      user={ user }
      { ...attributes }
    />
  );
}

const mapStateToProps = (state: State) => {
  const fields = state.form.passwordUpdate.fields;

  return {
    isValid: state.form.passwordUpdate.isValid,
    user: {
      password: String(fields.password.value),
      token: getTokenFromURL()
    }
  }
}

function getTokenFromURL() {
  const search = window.location?.search;
  return search?.slice(search?.lastIndexOf('token=') + 6);
}

export default connect(mapStateToProps)(FormPasswordUpdateContainer);
