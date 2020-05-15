import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../../redux/forms/actions';
import InputPassword from './InputPassword';

const InputPasswordContainer: React.FunctionComponent<Form.IInputAuthorizationPasswordProps> = ({
  value,
  setValue
}) => {
  return (
    <InputPassword
      value={ value }
      setValue={ setValue }
    />
  );
}

const inputType = 'password'

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

export default connect(mapStateToProps, mapDispatchToProps)(InputPasswordContainer);
