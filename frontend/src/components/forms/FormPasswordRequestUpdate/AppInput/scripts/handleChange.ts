import isValidInput from './isValidInput';
import isValidForm from '../../../scripts/isValidForm';

const handleChange = (
  inputType: Form.InputTypesPasswordRequestUpdate,
  setValue: (value: string) => any,
  setIsValid: (value: boolean) => any,
  setIsValidForm: (value: boolean) => any,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  switch (inputType) {
    default:
      setValue(event.target.value)
      setIsValid(isValidInput(inputType));
      setIsValidForm(isValidForm('passwordRequestUpdate'));
  }
}

export default handleChange;
