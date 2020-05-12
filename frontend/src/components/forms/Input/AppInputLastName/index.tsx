import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputLastNameProps, InputValidStatusClass } from '../..';
import { setLastNameValue, setIsValidLastName } from '../../../../store/forms/registration/actions';
import isValidInput from '../../other/isValidInput';

const AppInputLastName: FunctionComponent<IAppInputLastNameProps> = ({ value, isValid, setValue, setIsValid }) => {
  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setIsValid(isValidInput('lastName'));
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
    value: state.registration.lastName.value,
    isValid: state.registration.lastName.isValid
  }
}

const mapDispatchToProps = {
  setValue: setLastNameValue,
  setIsValid: setIsValidLastName
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputLastName);
