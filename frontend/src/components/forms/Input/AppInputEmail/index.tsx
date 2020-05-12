import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputEmailProps, InputValidStatusClass } from '../..';
import { setEmailValue, setIsValidEmail } from '../../../../store/forms/registration/actions';
import isValidInput from '../../other/isValidInput';

const AppInputEmail: FunctionComponent<IAppInputEmailProps> = ({ value, isValid, setValue, setIsValid }) => {
  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setIsValid(isValidInput('email'));
  }

  return (
    <input
      type="email"
      className={ `form-control ${ validStatusClass }` }
      value={ value }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Пример: tester@test.com"
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = (state: any) => {
  return {
    value: state.registration.email.value,
    isValid: state.registration.email.isValid
  }
}

const mapDispatchToProps = {
  setValue: setEmailValue,
  setIsValid: setIsValidEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputEmail);
