import React from 'react';
import isValidInput from './scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import getValidationStatusClass from '../scripts/getValidationStatusClass';

const InputConfirmedPassword: React.FunctionComponent<Form.IInputPasswordUpdateComfirmedPasswordProps> = ({
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
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Повторите пороль"
      onChange={ handleChange }
    />
  );
}

export default InputConfirmedPassword;
