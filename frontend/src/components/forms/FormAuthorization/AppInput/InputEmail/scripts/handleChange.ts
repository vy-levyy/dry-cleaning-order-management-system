import store from '../../../../../../store';

store.getState().form.authorization

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
  setIsValid(isValidInput());
  setIsValidForm(isValidForm('authorization'));
}
