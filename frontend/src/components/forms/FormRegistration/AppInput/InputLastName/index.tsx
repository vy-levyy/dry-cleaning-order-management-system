import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputLastName from './InputLastName';

const InputLastNameContainer: React.FunctionComponent<Form.IInputRegistrationLastNameProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm,
}) => {
  return (
    <InputLastName
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidForm={ setIsValidForm }
    />
  );
}

const inputType = 'lastName'

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

export default connect(mapStateToProps, mapDispatchToProps)(InputLastNameContainer);
