import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputEmailProps, InputValidStatusClass } from '../..';
import { setEmailValue, setIsValidEmail } from '../../../../redux/forms/registration/actions';
import isValidInput from '../../scripts/isValidInput';

const AppInputEmail: FunctionComponent<IAppInputEmailProps> = ({ value, isValid, setValue, setIsValid }) => {
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
      name="email"
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
    value: state.form.registration.email.value,
    isValid: state.form.registration.email.isValid
  }
}

const mapDispatchToProps = {
  setValue: setEmailValue,
  setIsValid: setIsValidEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputEmail);
