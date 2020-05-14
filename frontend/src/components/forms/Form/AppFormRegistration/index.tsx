import React, {
  FunctionComponent,
  MouseEvent,
} from 'react';
import { connect } from 'react-redux';
import InputWrapper from '../../InputWrapper';
import { IAppFormRegistrationProps } from '../..';
import { State } from '../../../../redux';
import { userApi } from '../../../../controller/api';

const AppFormRegistration: FunctionComponent<IAppFormRegistrationProps> = ({
  isValid,
  user,
  ...attributes
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    userApi.signup(user)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.error(error);
      })
  }

  return (
    <form
      className="container col-10 col-md-8 col-lg-6 col-xl-4"
      { ...attributes }
    >
      <InputWrapper formName="registration" inputName="firstName" />
      <InputWrapper formName="registration" inputName="lastName" />
      <InputWrapper formName="registration" inputName="email" />
      <InputWrapper formName="registration" inputName="password" />
      <InputWrapper formName="registration" inputName="confirmedPassword" />
      <InputWrapper formName="registration" inputName="wantBeAdmin" />
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
          <a className="nav-link" href="#">Sign in</a>
          <a className="nav-link" href="#">Password recovery</a>
        </div>
      </div>
    </form>
  );
}

const mapStateToProps = (state: State) => {
  const { registration, registration: { fields }} = state.form;

  return {
    isValid: registration.isValid,
    user: {
      firstName: String(fields.firstName.value),
      lastName: String(fields.lastName.value),
      email: String(fields.email.value),
      password: String(fields.password.value),
      wantBeAdmin: Boolean(fields.wantBeAdmin.value),
    }
  }
}

export default connect(mapStateToProps)(AppFormRegistration);
