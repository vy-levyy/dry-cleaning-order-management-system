import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputPassword from './InputPassword';

const InputPasswordContainer: React.FunctionComponent<Form.IInputPasswordUpdatePasswordProps> = ({
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
  const field = state.form.passwordUpdate.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string | boolean) => dispatch(formActions.passwordUpdate.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValidForm(value)),
    setIsValidConfirmedPassword: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValid('confirmedPassword', value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPasswordContainer);
