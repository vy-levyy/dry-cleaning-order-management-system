import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputPassword from './InputPassword';

const InputPasswordContainer: React.FunctionComponent<Form.IInputRegistrationPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm,
  setIsValidConfirmedPassword
}) => {
  return (
    <InputPassword
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidForm={ setIsValidForm }
      setIsValidConfirmedPassword={ setIsValidConfirmedPassword }
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

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string | boolean) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value)),
    setIsValidConfirmedPassword: (value: boolean) => dispatch(formActions.registration.setIsValid('confirmedPassword', value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPasswordContainer);
