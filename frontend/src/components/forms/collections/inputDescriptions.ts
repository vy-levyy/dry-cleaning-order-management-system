import { InputDescriptions } from "..";

const textTypeClass = 'form-control';

const inputDescriptions: InputDescriptions = {
  firstName: {
    name: 'First name',
    type: 'text',
    tooltip: 'Минимум 1 символ',
    className: textTypeClass
  },

  lastName: {
    name: 'Last name',
    type: 'text',
    tooltip: 'Минимум 1 символ',
    className: textTypeClass
  },

  email: {
    name: 'Email',
    type: 'email',
    tooltip: 'Пример: tester@test.com',
    className: textTypeClass
  },

  password: {
    name: 'Password',
    type: 'password',
    tooltip:
      'Минимум 6 символов'
      + '\nМинимум 1 цифра'
      + '\nМинимум 1 большая буква'
      + '\nМинимум 1 маленькая буква'
      + '\nМинимум 1 спец. символ',
    className: textTypeClass
  },

  confirmedPassword: {
    name: 'Confirm password',
    type: 'password',
    tooltip: 'Повторите пароль',
    className: textTypeClass
  }
};

export default inputDescriptions;
