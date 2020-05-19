import React from 'react';
import { connect } from 'react-redux';
import InputPassword from './InputPassword';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';
import formActions from '../../../../../redux/forms/actions';

const InputPasswordContainer: React.FunctionComponent<Form.IInputRegistrationPasswordProps> = ({
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
    setValue: (value: string) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidConfirmedPassword: (value: boolean) => dispatch(formActions.registration.setIsValid('confirmedPassword', value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputPasswordContainer);
