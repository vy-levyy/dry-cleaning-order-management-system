import React from 'react';
import isValidInput from './scripts/isValidInput';
import isValidInputConfirmedPassword from '../InputConfirmedPassword/scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import getValidationStatusClass from '../scripts/getValidationStatusClass';

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

  const title = 
    'Минимум 6 символов'
    + '\nМинимум 1 цифра'
    + '\nМинимум 1 большая буква'
    + '\nМинимум 1 маленькая буква'
    + '\nМинимум 1 спец. символ';

  return (
    <input
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ title }
      onChange={ handleChange }
    />
  );
}

export default InputPassword;
