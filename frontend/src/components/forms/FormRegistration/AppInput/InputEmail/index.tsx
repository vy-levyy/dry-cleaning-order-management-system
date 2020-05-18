import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputEmail from './InputEmail';

const InputEmailContainer: React.FunctionComponent<Form.IInputRegistrationEmailProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm,
}) => {
  return (
    <InputEmail
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidForm={ setIsValidForm }
    />
  );
}

const inputType = 'email';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];
  
  return {
    value: field.value,
    isValid: field.isValid
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string | boolean) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEmailContainer);
