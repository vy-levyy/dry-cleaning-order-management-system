import React from 'react';

const InputEmail: React.FunctionComponent<Form.IInputPasswordRequestUpdateEmailProps> = ({
  value,
  setValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <input
      type="email"
      className={ `form-control` }
      value={ String(value) }
      onChange={ handleChange }
    />
  );
}

export default InputEmail;
