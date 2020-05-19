import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import getTooltip from '../../../scripts/getTooltip';
import handleChange from '../../scripts/handleChange';

const InputPassword: React.FunctionComponent<Form.IInputRegistrationPasswordProps> = ({
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
      data-original-title={ getTooltip('password') }
      onChange={ handleChange.bind(null, 'password') }
    />
  );
}

export default InputPassword;
