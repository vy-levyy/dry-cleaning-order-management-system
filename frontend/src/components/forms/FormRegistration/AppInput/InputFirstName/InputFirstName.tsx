import React from 'react';
import isValidInput from '../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltip from '../../../scripts/getTooltip';
import handleChange from '../../scripts/handleChange';

const InputFirstName: React.FunctionComponent<Form.IInputRegistrationFirstNameProps> = ({
  value,
  isValid
}) => {
  let validationStatusClass: string = '';

  if (value) {
    validationStatusClass = getValidationStatusClass(isValid);
  }

  return (
    <input
      type="text"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ getTooltip('firstName') }
      onChange={ handleChange.bind(null, 'firstName') }
    />
  );
}

export default InputFirstName;
