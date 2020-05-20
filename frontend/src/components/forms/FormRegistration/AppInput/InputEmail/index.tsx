import React from 'react';
import { connect } from 'react-redux';
import InputEmail from './InputEmail';
import formActions from '../../../../../redux/forms/actions';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';

const InputEmailContainer: React.FunctionComponent<Form.IInputRegistrationEmailProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm
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

const mapStateToProps = mapStateToPropsWrapper(inputType);

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEmailContainer);
