const getValidationStatusClass = (isValid: boolean) => {
  return isValid ? 'is-valid' : 'is-invalid';
}

export default getValidationStatusClass;
