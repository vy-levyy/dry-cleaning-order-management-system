import React, { FunctionComponent } from 'react'
import AppInput from '../AppInput';
import inputDescriptions from '../collections/inputDescriptions';
import { IInputWrapperProps } from '..';

const InputWrapper: FunctionComponent<IInputWrapperProps> = ({
  inputName,
  value,
  isValid,
  handleChange,
  ...otherAttributes
}) => {
  return (
    <div className="form-group">
      <label>{ inputDescriptions[inputName].name }</label>
      <AppInput
        inputName={ inputName }
        value={ value }
        isValid={ isValid }
        handleChange={ handleChange }
        { ...otherAttributes }
      />
    </div>
  );
}

export default InputWrapper;
