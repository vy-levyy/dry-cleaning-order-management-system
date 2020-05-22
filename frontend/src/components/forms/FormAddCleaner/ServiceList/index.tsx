import React, { useState } from 'react';
import { Service } from '../types';
import InputAddItem from './InputAddItem';

type Props = {
  value: Service[];
  setValue: React.Dispatch<React.SetStateAction<Service[]>>;
};

const ServiceList: React.FunctionComponent<Props> = ({
  value,
  setValue
}) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleClick = () => {
    if (name.length !== 0 && price.length !== 0) {
      value.push({
        name,
        price: Number(price)
      });
      setValue([...value]);
      setName('');
      setPrice('');
    }
  }

  const getList = () => {
    return value.map((item: Service, index) => {
      return (
        <div
          className="row"
          style={ { borderBottom: "1px solid #ced4da" } }
          key={ index }
        >
          <div className="col">
            { item.name }
          </div>
          <div className="col-3 text-center">
          { item.price }
          </div>
        </div>
      );
    });
  }

  return (
    <>
      { getList() }
      <InputAddItem
        name={ name }
        price={ price }
        setName={ setName }
        setPrice={ setPrice }
      />
      <button
        className="btn btn-secondary btn-block"
        onClick={ handleClick }
        type="button"
      >
        Add service
      </button>
    </>
  );
}

export default ServiceList;
