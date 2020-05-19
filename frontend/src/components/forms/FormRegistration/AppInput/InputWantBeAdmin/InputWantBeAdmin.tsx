import React from 'react';
import handleChange from '../../scripts/handleChange';

const InputWantBeAdmin: React.FunctionComponent<Form.IInputRegistrationWantBeAdminProps> = ({
  value
}) => {
  return (
    <input
      type="checkbox"
      className={ `form-check-input ml-2` }
      value="Want be admin"
      checked={ value }
      onChange={ handleChange.bind(null, 'wantBeAdmin') }
    />
  );
}

export default InputWantBeAdmin;

