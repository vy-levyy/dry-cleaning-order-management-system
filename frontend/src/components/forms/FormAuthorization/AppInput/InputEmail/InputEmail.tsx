import React from 'react';
import getValidationStatusClass from '../../../scripts/getValidationStatusClass';
import handleChange from '../scripts/handleChange';
import getTooltipAttributes from '../../../scripts/getTooltipAttributes';

const InputEmail: React.FunctionComponent<Form.IInputAuthorizationEmailProps> = ({
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
      type="email"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      { ...getTooltipAttributes('email') }
      onChange={ handleChange.bind(
        null,
        'email',
        setValue,
        setIsValid,
        setIsValidForm
      )}
    />
  );
}

export default InputEmail;
