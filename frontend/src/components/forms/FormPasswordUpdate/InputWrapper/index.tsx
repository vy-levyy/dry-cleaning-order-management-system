import React from 'react';
import AppInput from '../AppInput';
import inputLabels from '../../scripts/inputLabels';

const InputWrapper: React.FunctionComponent<
  Form.IAppInputWrapperProps<Form.InputTypesPasswordUpdate>
> = ({ appInputType, ...attributes }) => {
  return (
    <div className="form-group">
      <label>{ inputLabels[appInputType] }</label>
      <AppInput
        appType={ appInputType }
        { ...attributes }
      />
    </div>
  );
}

export default InputWrapper;
