import React from 'react';
import isValidInput from './scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import getValidationStatusClass from '../scripts/getValidationStatusClass';

const InputLastName: React.FunctionComponent<Form.IInputRegistrationLastNameProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm
}) => {
  let validationStatusClass: string = '';

  if (value) {
    validationStatusClass = getValidationStatusClass(isValid);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsValid(isValidInput());
    setIsValidForm(isValidForm());
  }

  return (
    <input
      type="text"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Минимум 1 символ"
      onChange={ handleChange }
    />
  );
}

export default InputLastName;