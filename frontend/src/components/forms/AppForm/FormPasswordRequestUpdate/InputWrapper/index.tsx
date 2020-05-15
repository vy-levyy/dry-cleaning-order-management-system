import React from 'react';
import AppInput from '../AppInput';
import inputLabels from '../../inputLabels';

const InputWrapper: React.FunctionComponent<Form.IInputWrapperPasswordRequestUpdateProps> = ({ appInputType }) => {
  return (
    <div className="form-group">
      <label>{ inputLabels[appInputType] }</label>
      <AppInput appType={ appInputType } />
    </div>
  );
}

export default InputWrapper;
