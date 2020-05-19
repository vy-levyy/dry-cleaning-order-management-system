import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputConfirmedPassword from './InputConfirmedPassword';

const InputConfirmedPasswordContainer: React.FunctionComponent<Form.IInputRegistrationConfirmedPasswordProps> = ({
  value,
  isValid
}) => {
  return (
    <InputConfirmedPassword
      value={ value }
      isValid={ isValid }
    />
  );
}
const inputType = 'confirmedPassword';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

export default connect(mapStateToProps)(InputConfirmedPasswordContainer);
