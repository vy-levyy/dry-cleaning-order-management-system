import React, { FunctionComponent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { IAppInputWantBeAdminProps } from '../..';
import { State, InputOwnProps } from '../../../../redux';
import formActions from '../../../../redux/forms/actions';

const AppInputWantBeAdmin: FunctionComponent<IAppInputWantBeAdminProps> = ({
  value,
  setValue
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  }

  return (
    <input
      name="wantBeAdmin"
      type="checkbox"
      className={ `form-check-input ml-2` }
      value="Want be admin"
      checked={ Boolean(value) }
      onChange={ handleChange }
    />
  );
}

const mapStateToProps = (state: State, { formName }: InputOwnProps) => {
  return {
    value: state.form[formName].fields.wantBeAdmin.value,
  }
}

const mapDispatchToProps = (dispatch: Function, { formName }: InputOwnProps) => {
  return {
    setValue: (value: boolean) => dispatch(formActions[formName].setValue('wantBeAdmin', value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputWantBeAdmin);
