import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../../redux';
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
  const fields = state.form.passwordRequestUpdate.fields;

  return {
    user: {
      email: String(fields.email.value)
    }
  }
}

export default connect(mapStateToProps)(FormPasswordRequestUpdateContainer);
