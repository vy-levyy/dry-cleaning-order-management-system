import React from 'react';

const InputPassword: React.FunctionComponent<Form.IInputAuthorizationPasswordProps> = ({
  value,
  setValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <input
      type="password"
      className={ `form-control` }
      value={ String(value) }
      onChange={ handleChange }
    />
  );
}

export default InputPassword;
