import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputConfirmedPasswordProps, InputValidStatusClass } from '../..';
import { setConfirmedPasswordValue, setIsValidConfirmedPassword } from '../../../../redux/forms/registration/actions';
import isValidInput from '../../scripts/isValidInput';

const AppInputConfirmedPassword: FunctionComponent<IAppInputConfirmedPasswordProps> = ({ value, isValid, setValue, setIsValid }) => {
  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setIsValid(isValidInput(event.target.name));
  }

  return (
    <input
      name="confirmedPassword"
      type="password"
      className={ `form-control ${ validStatusClass }` }
      value={ value }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Повторите пороль"
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = (state: any) => {
  return {
    value: state.form.registration.confirmedPassword.value,
    isValid: state.form.registration.confirmedPassword.isValid
  }
}

const mapDispatchToProps = {
  setValue: setConfirmedPasswordValue,
  setIsValid: setIsValidConfirmedPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputConfirmedPassword);