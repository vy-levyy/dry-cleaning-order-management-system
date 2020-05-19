const fieldValue = { value: String() }
const isValidValue = Boolean();
const fieldValueWithValidation = {
  ...fieldValue,
  isValid: isValidValue
}
const wantBeAdmin = { value: Boolean() }

const forms = {
  authorization: {
    fields: {
      email: fieldValueWithValidation,
      password: fieldValueWithValidation
    },
    isValid: isValidValue
  },
  registration: {
    fields: {
      firstName: fieldValueWithValidation,
      lastName: fieldValueWithValidation,
      email: fieldValueWithValidation,
      password: fieldValueWithValidation,
      confirmedPassword: fieldValueWithValidation,
      wantBeAdmin: wantBeAdmin
    },
    isValid: isValidValue
  },
  passwordRequestUpdate: {
    fields: {
      email: fieldValueWithValidation
    },
    isValid: isValidValue
  },
  passwordUpdate: {
    fields: {
      password: fieldValueWithValidation,
      confirmedPassword: fieldValueWithValidation
    },
    isValid: isValidValue
  }
}

export default forms;
