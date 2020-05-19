import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputEmail from './InputEmail';

const InputEmailContainer: React.FunctionComponent<Form.IInputRegistrationEmailProps> = ({
  value,
  isValid
}) => {
  return (
    <InputEmail
      value={ value }
      isValid={ isValid }
    />
  );
}

const inputType = 'email';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];
  
  return {
    value: field.value,
    isValid: field.isValid
  }
}

export default connect(mapStateToProps)(InputEmailContainer);
