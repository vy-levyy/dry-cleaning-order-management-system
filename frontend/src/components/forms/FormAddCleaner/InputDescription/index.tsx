import React from 'react';

type Props = any;

const InputDescription: React.FunctionComponent<Props> = ({
  value,
  setValue
}) => {
  let validationStatusClass: string = '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <input
      type="text"
      className={ `form-control ${ validationStatusClass }` }
      value={ value }
      onChange={ handleChange }
    />
  );
}

export default InputDescription;
