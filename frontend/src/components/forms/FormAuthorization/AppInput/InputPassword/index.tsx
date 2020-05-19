import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputPassword from './InputPassword';

const InputPasswordContainer: React.FunctionComponent<Form.IInputAuthorizationPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm
}) => {
  return (
    <InputPassword
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidForm={ setIsValidForm }
    />
  );
}

const inputType = 'password'

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.authorization.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string) => dispatch(formActions.authorization.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.authorization.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.authorization.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPasswordContainer);