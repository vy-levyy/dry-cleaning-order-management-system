import React, { FunctionComponent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { IAppInputEmailProps, InputValidStatusClass, InputNames } from '../..';
import isValidInput from '../../scripts/isValidInput';
import isValidForm from '../../scripts/isValidForm';
import appInputMapDispatchToPropsWrapper from '../../scripts/appInputMapDispatchToPropsWrapper';
import appInputMapStateToPropsWrapper from '../../scripts/appInputMapStateToPropsWrapper';

const AppInputEmail: FunctionComponent<IAppInputEmailProps> = ({
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
      name="email"
      type="email"
      className={ `form-control ${ validStatusClass }` }
      value={ String(value) }
      data-toggle="tooltip"
      data-placement="top"
      data-trigger="focus"
      data-original-title="Пример: tester@test.com"
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = appInputMapStateToPropsWrapper('email');
const mapDispatchToProps = appInputMapDispatchToPropsWrapper('email');

export default connect(mapStateToProps, mapDispatchToProps)(AppInputEmail);
