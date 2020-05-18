import React from 'react';
import { userApi } from '../../../controller/api';
import InputWrapper from './InputWrapper';
import { AxiosResponse } from 'axios';

const FormPasswordRequestUpdate: React.FunctionComponent<Form.IFormPasswordRequestUpdateProps> = ({
  user,
  ...attributes
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    userApi.passwordRequestUpdate(user)
      .then((response: AxiosResponse) => {
        console.log(response.data?.message);
      });
  }

  return (
    <form
      className="container col-10 col-md-8 col-lg-6 col-xl-4"
      { ...attributes }
    >
      <InputWrapper appInputType="email" />
      <div className="row text-center">
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={ handleClick }
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormPasswordRequestUpdate;
