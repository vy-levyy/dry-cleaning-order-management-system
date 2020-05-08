import React, { FunctionComponent } from 'react';
import IAppInputProps from '../interfaces';
import inputDescriptions from '../collections/inputDescriptions';

const AppInput: FunctionComponent<IAppInputProps> = ({
  inputName,
  value,
  handleChange,
  ...otherAttributes
}) => {
  const inputDescription = inputDescriptions[inputName];

  return (
    <input
      type={ inputDescription.type }
      className={ inputDescription.className }
      value={ value }
      data-toggle="tooltip"
      data-placement="bottom"
      data-trigger="focus"
      title={ inputDescription.tooltip }
      onChange={ (event) => handleChange(event) }
      { ...otherAttributes }
    />
  );
}

export default AppInput;
