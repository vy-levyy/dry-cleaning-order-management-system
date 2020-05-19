import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputFirstName from './InputFirstName';

const InputFirstNameContainer: React.FunctionComponent<Form.IInputRegistrationFirstNameProps> = ({
  value,
  isValid
}) => {
  return (
    <InputFirstName
      value={ value }
      isValid={ isValid }
    />
  );
}

const inputType = 'firstName'

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

export default connect(mapStateToProps)(InputFirstNameContainer);
