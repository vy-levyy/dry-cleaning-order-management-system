import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltipAttributes from '../../../scripts/getTooltipAttributes';
import isValidInput from '../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';

const InputEmail: React.FunctionComponent<Form.IInputRegistrationEmailProps> = ({
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
    setIsValid(isValidInput('email'));
    setIsValidForm(isValidForm());
  }

  return (
    <input
      type="email"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      { ...getTooltipAttributes('email') }
      onChange={ handleChange }
    />
  );
}

export default InputEmail;
