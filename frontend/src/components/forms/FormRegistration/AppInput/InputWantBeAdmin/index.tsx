import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../redux/forms/actions';
import InputWantBeAdmin from './InputWantBeAdmin';

const InputWantBeAdminContainer: React.FunctionComponent<Form.IInputRegistrationWantBeAdminProps> = ({
  value,
  setValue
}) => {
  return (
    <InputWantBeAdmin
      value={ value }
      setValue={ setValue }
    />
  );
}

const inputType = 'wantBeAdmin';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: boolean) => dispatch(formActions.registration.setWantBeAdminValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputWantBeAdminContainer);
