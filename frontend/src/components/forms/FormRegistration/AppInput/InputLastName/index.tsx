import React from 'react';
import { connect } from 'react-redux';
import InputLastName from './InputLastName';

const InputLastNameContainer: React.FunctionComponent<Form.IInputRegistrationLastNameProps> = ({
  value,
  isValid
}) => {
  return (
    <InputLastName
      value={ value }
      isValid={ isValid }
    />
  );
}

const inputType = 'lastName'

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

export default connect(mapStateToProps)(InputLastNameContainer);
