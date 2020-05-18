import React from 'react';
import AppInput from '../AppInput';
import inputLabels from '../../scripts/inputLabels';

const InputWrapper: React.FunctionComponent<Form.IInputWrapperPasswordUpdateProps> = ({ appInputType }) => {
  return (
    <div className="form-group">
      <label>{ inputLabels[appInputType] }</label>
      <AppInput appType={ appInputType } />
    </div>
  );
}

export default InputWrapper;
