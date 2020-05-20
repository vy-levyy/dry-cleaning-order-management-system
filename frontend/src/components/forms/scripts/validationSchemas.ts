import * as yup from 'yup';
import { ValidationSchemas } from '..';

const text = yup
  .string()
  .min(1)
  .max(50)
  .required();

const email = yup
  .string()
  .email()
  .required();

const password = yup
  .string()
  .min(6)
  .max(25)
  .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
  .required();

const validationSchemas: ValidationSchemas = {
  firstName: text,
  lastName: text,
  email: email,
  password: password,
  confirmedPassword: null,
  wantBeAdmin: null
};

export default validationSchemas;
