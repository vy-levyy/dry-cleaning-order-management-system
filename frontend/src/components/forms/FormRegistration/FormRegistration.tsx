import React from 'react';
import InputWrapper from './InputWrapper';
import { userApi } from '../../../controller/api';
import { AxiosResponse } from 'axios';
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

const AppFormRegistration: React.FunctionComponent<Form.IFormRegistrationProps> = ({
  isValid,
  user,
  ...attributes
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    userApi.signup(user)
      .then((response: AxiosResponse) => {
        const token = response?.data?.token;

        if (token) {
          localStorage.setItem('token', token);
          createBrowserHistory().go(0);
        }

        console.log(response);
      });
  }

  return (
    <form
      className="col-12 col-md-8 col-lg-6 col-xl-4"
      { ...attributes }
    >
      <InputWrapper appInputType="firstName" />
      <InputWrapper appInputType="lastName" />
      <InputWrapper appInputType="email" />
      <InputWrapper appInputType="password" />
      <InputWrapper appInputType="confirmedPassword" />
      <InputWrapper appInputType="wantBeAdmin" />
      <div className="row text-center">
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={ handleClick }
            disabled={ !isValid }
          >
            Sign Up
          </button>
          <Link className="nav-link" to="/authorization">Sign in</Link>
          <Link className="nav-link" to="/request-update-password">Password recovery</Link>
        </div>
      </div>
    </form>
  );
}

export default AppFormRegistration;
