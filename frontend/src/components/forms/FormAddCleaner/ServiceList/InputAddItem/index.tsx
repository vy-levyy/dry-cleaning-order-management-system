import React from 'react';

type Props = {
  name: string;
  price: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
};

const InputAddInput: React.FunctionComponent<Props> = ({
  name,
  price,
  setName,
  setPrice
}) => {
  let validationStatusClass: string = '';

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length === 0) {
      setPrice('');
    } else if (value.match(/^\d+$/)){
      setPrice(value);
    }
  }

  return (
    <div className="form-group">
      <div className="row">
        <div className="col">
          <label>Service name</label>
          <input
            type="text"
            className={ `form-control ${ validationStatusClass }` }
            value={ name }
            onChange={ handleNameChange }
          />
        </div>
        <div className="col-md-4">
          <label>Cost</label>
          <input
            type="text"
            className={ `form-control ${ validationStatusClass }` }
            value={ price }
            onChange={ handlePriceChange }
          />
        </div>
      </div>
    </div>
  );
}

export default InputAddInput;
