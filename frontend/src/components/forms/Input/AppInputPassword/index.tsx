import React, { FunctionComponent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { IAppInputPasswordProps, InputValidStatusClass, InputNames } from '../..';
import { InputOwnProps } from '../../../../redux';
import isValidInput from '../../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
// import appInputMapDispatchToPropsWrapper from '../../scripts/appInputMapDispatchToPropsWrapper';
import formActions from '../../../../redux/forms/actions';
import appInputMapStateToPropsWrapper from '../../scripts/appInputMapStateToPropsWrapper';

const AppInputPassword: FunctionComponent<IAppInputPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidConfirmedPassword,
  setIsValidForm,
  formName
}) => {
  let validStatusClass: InputValidStatusClass = '';

  if (value) {
    validStatusClass = isValid ? 'is-valid' : 'is-invalid';
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsValid(isValidInput(formName, event.target.name as InputNames));
    setIsValidConfirmedPassword(isValidInput(formName, 'confirmedPassword'));
    setIsValidForm(isValidForm(formName));
  }

  const title = 
    'Минимум 6 символов'
    + '\nМинимум 1 цифра'
    + '\nМинимум 1 большая буква'
    + '\nМинимум 1 маленькая буква'
    + '\nМинимум 1 спец. символ';

  return (
    <input
      name="password"
      type="password"
      className={ `form-control ${ validStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title={ title }
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = appInputMapStateToPropsWrapper('password');

// пока что не получается в отделный файл вынести
const mapDispatchToProps = (dispatch: Function, { formName }: InputOwnProps) => {
  return {
    setValue: (value: string) => dispatch(formActions[formName].setValue('password', value)),
    setIsValid: (value: boolean) => dispatch(formActions[formName].setIsValid('password', value)),
    setIsValidForm: (value: boolean) => dispatch(formActions[formName].setIsValidForm(value)),
    setIsValidConfirmedPassword: (value: boolean) => dispatch(formActions[formName].setIsValid('confirmedPassword', value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputPassword);
