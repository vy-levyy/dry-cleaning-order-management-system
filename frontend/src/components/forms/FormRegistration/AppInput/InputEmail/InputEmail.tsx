import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltip from '../../../scripts/getTooltip';
import handleChange from '../../scripts/handleChange';

const InputEmail: React.FunctionComponent<Form.IInputRegistrationEmailProps> = ({
  value,
  isValid
}) => {
  let validationStatusClass: string = '';

  if (value) {
    validationStatusClass = getValidationStatusClass(isValid);
  }

  return (
    <input
      type="email"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ getTooltip('email') }
      onChange={ handleChange.bind(null, 'email') }
    />
  );
}

export default InputEmail;
