import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IAppInputFirstNameProps, InputValidStatusClass } from '../..';
import { setFirstNameValue, setIsValidFirstName } from '../../../../redux/forms/registration/actions';
import isValidInput from '../../scripts/isValidInput';

const AppInputFirstName: FunctionComponent<IAppInputFirstNameProps> = ({ value, isValid, setValue, setIsValid }) => {
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
      name="firstName"
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
    value: state.form.registration.firstName.value,
    isValid: state.form.registration.firstName.isValid
  }
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    setValue: (value: string) => dispatch(setFirstNameValue(value)),
    setIsValid: (value: boolean) => dispatch(setIsValidFirstName(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputFirstName);

// export default AppInputFirstName;
