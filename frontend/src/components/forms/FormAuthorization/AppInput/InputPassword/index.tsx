import React from 'react';
import { connect } from 'react-redux';
import InputPassword from './InputPassword';
import mapDispatchToPropsWrapper from '../scripts/mapDispatchToPropsWrapper';

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

const mapDispatchToProps = mapDispatchToPropsWrapper(inputType);

export default connect(mapStateToProps, mapDispatchToProps)(InputPasswordContainer);
