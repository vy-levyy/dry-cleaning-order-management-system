export const CHANGE_FIRST_NAME_VALUE = 'CHANGE_FIRST_NAME_VALUE';
export const CHANGE_IS_VALID_FIRST_NAME = 'CHANGE_IS_VALID_FIRST_NAME';

export const CHANGE_LAST_NAME_VALUE = 'CHANGE_LAST_NAME_VALUE';
export const CHANGE_IS_VALID_LAST_NAME = 'CHANGE_IS_VALID_LAST_NAME';

export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_IS_VALID_EMAIL = 'CHANGE_IS_VALID_EMAIL';

export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_IS_VALID_PASSWORD = 'CHANGE_IS_VALID_PASSWORD';

export const CHANGE_CONFIRMED_PASSWORD_VALUE = 'CHANGE_CONFIRMED_PASSWORD_VALUE';
export const CHANGE_IS_VALID_CONFIRMED_PASSWORD = 'CHANGE_IS_VALID_CONFIRMED_PASSWORD';

export const setFirstNameValue = (value: string) => ({
  type: CHANGE_FIRST_NAME_VALUE,
  payload: value
});
export const setIsValidFirstName = (isValid: boolean) => ({
  type: CHANGE_IS_VALID_FIRST_NAME,
  payload: isValid
});

export const setLastNameValue = (value: string) => ({
  type: CHANGE_LAST_NAME_VALUE,
  payload: value
});
export const setIsValidLastName = (isValid: boolean) => ({
  type: CHANGE_IS_VALID_LAST_NAME,
  payload: isValid
});

export const setEmailValue = (value: string) => ({
  type: CHANGE_EMAIL_VALUE,
  payload: value
});
export const setIsValidEmail = (isValid: boolean) => ({
  type: CHANGE_IS_VALID_EMAIL,
  payload: isValid
});

export const setPasswordValue = (value: string) => ({
  type: CHANGE_PASSWORD_VALUE,
  payload: value
});
export const setIsValidPassword = (isValid: boolean) => ({
  type: CHANGE_IS_VALID_PASSWORD,
  payload: isValid
});

export const setConfirmedPasswordValue = (value: string) => ({
  type: CHANGE_CONFIRMED_PASSWORD_VALUE,
  payload: value
});
export const setIsValidConfirmedPassword = (isValid: boolean) => ({
  type: CHANGE_IS_VALID_CONFIRMED_PASSWORD,
  payload: isValid
});
