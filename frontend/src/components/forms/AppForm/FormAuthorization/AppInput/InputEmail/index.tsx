import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../../redux/forms/actions';
import InputEmail from './InputEmail';

const InputEmailContainer: React.FunctionComponent<Form.IInputAuthorizationEmailProps> = ({
  value,
  setValue
}) => {
  return (
    <InputEmail
      value={ value }
      setValue={ setValue }
    />
  );
}

const inputType = 'email';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];
  
  return {
    value: field.value
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string | boolean) => dispatch(formActions.registration.setValue(inputType, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEmailContainer);
