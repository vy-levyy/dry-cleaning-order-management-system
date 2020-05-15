import React from 'react';

const InputWantBeAdmin: React.FunctionComponent<Form.IInputRegistrationWantBeAdminProps> = ({
  value,
  setValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  }

  return (
    <input
      type="checkbox"
      className={ `form-check-input ml-2` }
      value="Want be admin"
      checked={ Boolean(value) }
      onChange={ handleChange }
    />
  );
}

export default InputWantBeAdmin;

