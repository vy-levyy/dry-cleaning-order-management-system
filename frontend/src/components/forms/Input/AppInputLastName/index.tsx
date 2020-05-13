import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputLastNameProps, InputValidStatusClass } from '../..';
import { setLastNameValue, setIsValidLastName } from '../../../../redux/forms/registration/actions';
import isValidInput from '../../scripts/isValidInput';

const AppInputLastName: FunctionComponent<IAppInputLastNameProps> = ({ value, isValid, setValue, setIsValid }) => {
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
      name="lastName"
      type="text"
      className={ `form-control ${ validStatusClass }` }
      value={ value }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Минимум 1 символ"
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = (state: any) => {
  return {
    value: state.form.registration.lastName.value,
    isValid: state.form.registration.lastName.isValid
  }
}

const mapDispatchToProps = {
  setValue: setLastNameValue,
  setIsValid: setIsValidLastName
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputLastName);
