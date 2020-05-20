import React from 'react';
import { connect } from 'react-redux';
import InputLastName from './InputLastName';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';
import formActions from '../../../../../redux/forms/actions';

const InputLastNameContainer: React.FunctionComponent<Form.IInputRegistrationLastNameProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm
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

const inputType = 'lastName';

const mapStateToProps = mapStateToPropsWrapper(inputType);

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLastNameContainer);
