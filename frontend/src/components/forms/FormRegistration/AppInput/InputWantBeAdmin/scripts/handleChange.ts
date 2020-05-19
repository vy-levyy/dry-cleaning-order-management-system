import formActions from '../../../../../../redux/forms/registration/actions'

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  formActions.setWantBeAdminValue(event.target.checked);
}

export default handleChange;
