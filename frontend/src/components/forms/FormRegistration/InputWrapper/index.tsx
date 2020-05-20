import React from 'react';
import AppInput from '../../FormRegistration/AppInput';
import inputLabels from '../../scripts/inputLabels';

const InputWrapper: React.FunctionComponent<
  Form.IAppInputWrapperProps<Form.InputTypesRegistration>
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
