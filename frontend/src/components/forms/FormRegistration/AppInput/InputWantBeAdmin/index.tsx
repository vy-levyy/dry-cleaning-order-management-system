import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputWantBeAdmin from './InputWantBeAdmin';

const InputWantBeAdminContainer: React.FunctionComponent<Form.IInputRegistrationWantBeAdminProps> = ({
  value
}) => {
  return (
    <InputWantBeAdmin
      value={ value }
    />
  );
}

const inputType = 'wantBeAdmin';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value
  }
}

export default connect(mapStateToProps)(InputWantBeAdminContainer);
