import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputPassword from './InputPassword';

const InputPasswordContainer: React.FunctionComponent<Form.IInputRegistrationPasswordProps> = ({
  value,
  isValid
}) => {
  return (
    <InputPassword
      value={ value }
      isValid={ isValid }
    />
  );
}

const inputType = 'password'

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

export default connect(mapStateToProps)(InputPasswordContainer);
