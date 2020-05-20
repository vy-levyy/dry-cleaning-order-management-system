import React from 'react';
import { connect } from 'react-redux';
import InputEmail from './InputEmail';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';
import mapDispatchToPropsWrapper from '../scripts/mapDispatchToPropsWrapper';

const InputEmailContainer: React.FunctionComponent<Form.IInputPasswordRequestUpdateEmailProps> = ({
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
const mapDispatchToProps = mapDispatchToPropsWrapper(inputType);

export default connect(mapStateToProps, mapDispatchToProps)(InputEmailContainer);
