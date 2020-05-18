import React from 'react';
import { userApi } from '../../../controller/api';
import InputWrapper from './InputWrapper';
import { AxiosResponse } from 'axios';

const FormAuthorization: React.FunctionComponent<Form.IFormAuthorizationProps> = ({
  user,
  ...attributes
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    userApi.signin(user)
      .then((response: AxiosResponse) => {
        localStorage.setItem('token', response.data?.token);
        console.log(response);
      });
  }

  return (
    <form
      className="container col-10 col-md-8 col-lg-6 col-xl-4"
      { ...attributes }
    >
      <InputWrapper appInputType="email" />
      <InputWrapper appInputType="password" />
      <div className="row text-center">
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={ handleClick }
          >
            Sign In
          </button>
          <a className="nav-link" href="/registration">Sign Up</a>
          <a className="nav-link" href="/request-update-password">Password recovery</a>
        </div>
      </div>
    </form>
  );
}

export default FormAuthorization;
