import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../redux';
import FormPasswordRequestUpdate from './FormPasswordRequestUpdate';

const FormPasswordRequestUpdateContainer: React.FunctionComponent<Form.IFormPasswordRequestUpdateProps> = ({
  user,
  ...attributes
}) => {
  return (
    <FormPasswordRequestUpdate
      user={ user }
      { ...attributes }
    />
  );
}

const mapStateToProps = (state: State) => {
  const form = state.form.passwordRequestUpdate;

  return {
    isValid: form.isValid,
    user: {
      email: String(form.fields.email.value)
    }
  }
}

export default connect(mapStateToProps)(FormPasswordRequestUpdateContainer);
