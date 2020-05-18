import React from 'react';
import handleChange from './scripts/handleChange';

const InputWantBeAdmin: React.FunctionComponent<Form.IInputRegistrationWantBeAdminProps> = ({
  value,
  setValue
}) => {
  return (
    <input
      type="checkbox"
      className={ `form-check-input ml-2` }
      value="Want be admin"
      checked={ Boolean(value) }
      onChange={ handleChange.bind(null, setValue) }
    />
  );
}

export default InputWantBeAdmin;

