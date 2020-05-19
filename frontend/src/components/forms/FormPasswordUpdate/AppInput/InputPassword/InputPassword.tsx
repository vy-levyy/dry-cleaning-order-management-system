import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltipAttributes from '../../../scripts/getTooltipAttributes';
import isValidInput from '../scripts/isValidInput';
import isValidForm from '../../../scripts/isValidForm';

const InputPassword: React.FunctionComponent<Form.IInputPasswordUpdatePasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidConfirmedPassword,
  setIsValidForm
}) => {
  let validationStatusClass: string = '';

  if (value) {
    validationStatusClass = getValidationStatusClass(isValid);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsValid(isValidInput('password'));
    setIsValidConfirmedPassword(isValidInput('confirmedPassword'));
    setIsValidForm(isValidForm('passwordUpdate'));
  }

  return (
    <input
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      { ...getTooltipAttributes('password') }
      onChange={ handleChange }
    />
  );
}

export default InputPassword;
