import React from 'react';
import { connect } from 'react-redux';
import InputFirstName from './InputFirstName';
import formActions from '../../../../../redux/forms/actions';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';

const InputFirstNameContainer: React.FunctionComponent<Form.IInputRegistrationFirstNameProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm
}) => {
  return (
    <InputFirstName
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidForm={ setIsValidForm }
    />
  );
}

const inputType = 'firstName'

const mapStateToProps = mapStateToPropsWrapper(inputType);

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFirstNameContainer);
