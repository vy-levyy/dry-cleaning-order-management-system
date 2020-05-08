import React, { FunctionComponent } from 'react'
import IAppInputProps from '../interfaces';
import AppInput from '../AppInput';
import inputDescriptions from '../collections/inputDescriptions';

interface IInputWrapperProps extends IAppInputProps { }

const InputWrapper: FunctionComponent<IInputWrapperProps> = ({
  inputName,
  value,
  handleChange
}) => {
  return (
    <div className="form-group">
      <label>{ inputDescriptions[inputName].name }</label>
      <AppInput
        inputName={ inputName }
        value={ value }
        handleChange={ handleChange }
      />
    </div>
  );
}

export default InputWrapper;
