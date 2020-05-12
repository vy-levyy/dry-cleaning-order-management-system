import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputPasswordProps, InputValidStatusClass } from '../..';
import { setPasswordValue, setIsValidPassword } from '../../../../store/forms/registration/actions';
import isValidInput from '../../other/isValidInput';

const AppInputPassword: FunctionComponent<IAppInputPasswordProps> = ({ value, isValid, setValue, setIsValid }) => {
  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setIsValid(isValidInput('password'));
  }

  const title = 
    'Минимум 6 символов'
    + '\nМинимум 1 цифра'
    + '\nМинимум 1 большая буква'
    + '\nМинимум 1 маленькая буква'
    + '\nМинимум 1 спец. символ';

  return (
    <input
      type="password"
      className={ `form-control ${ validStatusClass }` }
      value={ value }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ title }
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = (state: any) => {
  return {
    value: state.registration.password.value,
    isValid: state.registration.password.isValid
  }
}

const mapDispatchToProps = {
  setValue: setPasswordValue,
  setIsValid: setIsValidPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputPassword);
