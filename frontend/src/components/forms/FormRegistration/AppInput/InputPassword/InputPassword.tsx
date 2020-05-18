import React from 'react';
import isValidInput from './scripts/isValidInput';
import isValidInputConfirmedPassword from '../InputConfirmedPassword/scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltip from '../../../scripts/getTooltip';

const InputPassword: React.FunctionComponent<Form.IInputRegistrationPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm,
  setIsValidConfirmedPassword
}) => {
  let validationStatusClass: string = '';

  if (value) {
    validationStatusClass = getValidationStatusClass(isValid);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsValid(isValidInput());
    setIsValidConfirmedPassword(isValidInputConfirmedPassword());
    setIsValidForm(isValidForm());
  }

  return (
    <input
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ getTooltip('password') }
      onChange={ handleChange }
    />
  );
}

export default InputPassword;
