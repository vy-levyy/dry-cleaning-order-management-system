import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltip from '../../../scripts/getTooltip';
import handleChange from '../../scripts/handleChange';

const InputConfirmedPassword: React.FunctionComponent<Form.IInputRegistrationConfirmedPasswordProps> = ({
  value,
  isValid
}) => {
  let validationStatusClass: string = '';

  if (value) {
    validationStatusClass = getValidationStatusClass(isValid);
  }

  return (
    <input
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ getTooltip('confirmedPassword') }
      onChange={ handleChange.bind(null, 'confirmedPassword') }
    />
  );
}

export default InputConfirmedPassword;
