import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import handleChange from '../scripts/handleChange';
import getTooltipAttributes from '../../../scripts/getTooltipAttributes';

const InputPassword: React.FunctionComponent<Form.IInputAuthorizationPasswordProps> = ({
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

  return (
    <input
      type="password"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      { ...getTooltipAttributes('password') }
      onChange={ handleChange.bind(
        null,
        'password',
        setValue,
        setIsValid,
        setIsValidForm
      )}
    />
  );
}


export default InputPassword;
