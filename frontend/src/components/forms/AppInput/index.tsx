import React, { FunctionComponent } from 'react';
import inputDescriptions from '../collections/inputDescriptions';
import { IAppInputProps, InputValidStatusClass } from '..';

const AppInput: FunctionComponent<IAppInputProps> = ({
  inputName,
  value,
  isValid,
  handleChange,
  ...otherAttributes
}) => {
  const inputDescription = inputDescriptions[inputName];

  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  return (
    <input
      type={ inputDescription.type }
      className={ `${ inputDescription.className } ${ validStatusClass }` }
      value={ value }
      data-toggle="tooltip"
      data-placement="bottom"
      data-trigger="focus"
      data-original-title={ inputDescription.tooltip }
      onChange={ (event) => handleChange(event) }
      { ...otherAttributes }
    />
  );
}

export default AppInput;
