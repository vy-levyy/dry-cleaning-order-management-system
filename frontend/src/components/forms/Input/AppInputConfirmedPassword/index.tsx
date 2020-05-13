import React, {
  FunctionComponent,
  ChangeEvent
} from 'react';

import { connect } from 'react-redux';

import {
  IAppInputConfirmedPasswordProps,
  InputValidStatusClass,
  InputNames
} from '../..';

import isValidInput from '../../scripts/isValidInput';

import appInputMapDispatchToPropsWrapper from '../../scripts/appInputMapDispatchToPropsWrapper';
import isValidForm from '../../scripts/isValidForm';
import appInputMapStateToPropsWrapper from '../../scripts/appInputMapStateToPropsWrapper';

const AppInputConfirmedPassword: FunctionComponent<IAppInputConfirmedPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
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
    setIsValidForm(isValidForm(formName));
  }

  return (
    <input
      name="confirmedPassword"
      type="password"
      className={ `form-control ${ validStatusClass }` }
      value={ value }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Повторите пороль"
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = appInputMapStateToPropsWrapper('confirmedPassword');
const mapDispatchToProps = appInputMapDispatchToPropsWrapper('confirmedPassword');

export default connect(mapStateToProps, mapDispatchToProps)(AppInputConfirmedPassword);
