import React from 'react';
import { connect } from 'react-redux';
import InputPassword from './InputPassword';
import formActions from '../../../../../redux/forms/actions';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';

const InputPasswordContainer: React.FunctionComponent<Form.IInputPasswordUpdatePasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidConfirmedPassword,
  setIsValidForm
}) => {
  return (
    <InputPassword
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidConfirmedPassword={ setIsValidConfirmedPassword }
      setIsValidForm={ setIsValidForm }
    />
  );
}

const inputType = 'password'

const mapStateToProps = mapStateToPropsWrapper(inputType);

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string) => dispatch(formActions.passwordUpdate.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValid(inputType, value)),
    setIsValidConfirmedPassword: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValid('confirmedPassword', value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPasswordContainer);
