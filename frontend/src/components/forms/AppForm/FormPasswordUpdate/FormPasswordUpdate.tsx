import React from 'react';
import { userApi } from '../../../../controller/api';
import InputWrapper from './InputWrapper';
import { AxiosResponse } from 'axios';

const FormPasswordUpdate: React.FunctionComponent<Form.IFormPasswordUpdateProps> = ({
  isValid,
  user,
  ...attributes
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    userApi.passwordUpdate(user)
      .then((response: AxiosResponse) => {
        console.log(response.data?.message)
      });
  }

  return (
    <form
      className="container col-10 col-md-8 col-lg-6 col-xl-4"
      { ...attributes }
    >
      <InputWrapper appInputType="password" />
      <InputWrapper appInputType="confirmedPassword" />
      <div className="row text-center">
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={ handleClick }
            disabled={ !isValid }
          >
            Change password
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormPasswordUpdate;
