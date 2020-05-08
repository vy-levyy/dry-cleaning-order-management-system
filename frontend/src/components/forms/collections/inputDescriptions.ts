import { InputDescriptions } from "..";

const inputDescriptions: InputDescriptions = {
  firstName: {
    name: 'First name',
    type: 'text',
    tooltip: 'Минимум 1 символ',
    className: 'form-control'
  },

  lastName: {
    name: 'Last name',
    type: 'text',
    tooltip: 'Минимум 1 символ',
    className: 'form-control'
  },

  email: {
    name: 'Email',
    type: 'email',
    tooltip: 'Пример: tester@test.com',
    className: 'form-control'
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
    className: 'form-control'
  },

  confirmedPassword: {
    name: 'Confirm password',
    type: 'password',
    tooltip: 'Повторите пароль',
    className: 'form-control'
  }
};

export default inputDescriptions;
