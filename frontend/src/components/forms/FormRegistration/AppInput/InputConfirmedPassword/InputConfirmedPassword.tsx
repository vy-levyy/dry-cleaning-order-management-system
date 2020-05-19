import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltipAttributes from '../../../scripts/getTooltipAttributes';
import isValidInput from '../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';

const InputConfirmedPassword: React.FunctionComponent<Form.IInputRegistrationConfirmedPasswordProps> = ({
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
    setIsValid(isValidInput('confirmedPassword'));
    setIsValidForm(isValidForm());
  }

  return (
    <input
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      { ...getTooltipAttributes('confirmedPassword') }
      onChange={ handleChange }
    />
  );
}

export default InputConfirmedPassword;
