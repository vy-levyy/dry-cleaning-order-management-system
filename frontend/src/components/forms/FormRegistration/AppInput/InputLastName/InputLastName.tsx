import React from 'react';
import isValidInput from '../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltip from '../../../scripts/getTooltip';
import handleChange from '../../scripts/handleChange';

const InputLastName: React.FunctionComponent<Form.IInputRegistrationLastNameProps> = ({
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
      data-original-title={ getTooltip('lastName') }
      onChange={ handleChange.bind(null, 'lastName') }
    />
  );
}

export default InputLastName;
