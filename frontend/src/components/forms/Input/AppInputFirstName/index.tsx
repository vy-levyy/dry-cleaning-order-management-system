import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputFirstNameProps, InputValidStatusClass } from '../..';
import { setFirstNameValue, setIsValidFirstName } from '../../../../store/forms/registration/actions';
import isValidInput from '../../other/isValidInput';

const AppInputFirstName: FunctionComponent<IAppInputFirstNameProps> = ({ value, isValid, setValue, setIsValid }) => {
  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setIsValid(isValidInput('firstName'));
  }

  return (
    <input
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
    value: state.registration.firstName.value,
    isValid: state.registration.firstName.isValid
  }
}

const mapDispatchToProps = {
  setValue: setFirstNameValue,
  setIsValid: setIsValidFirstName
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputFirstName);
