import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltipAttributes from '../../../scripts/getTooltipAttributes';
import isValidInput from '../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';

const InputFirstName: React.FunctionComponent<Form.IInputRegistrationFirstNameProps> = ({
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
    setIsValid(isValidInput('firstName'));
    setIsValidForm(isValidForm());
  }

  return (
    <input
      type="text"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      { ...getTooltipAttributes('firstName') }
      onChange={ handleChange }
    />
  );
}

export default InputFirstName;
