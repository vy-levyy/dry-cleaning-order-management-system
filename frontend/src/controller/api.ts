import controller from './controller';
import { Api } from '.';

const api: Api.Api = {
  userApi: {
    signup(user) {
      return controller.post(
        'auth/registration', {
          user
        })
        .then((response) => {
          return response;
        });
    },
    signin(user) {
      return controller.post(
        'auth/login', {
          user
        })
        .then((response) => {
          return response;
        });
    },
    passwordRequestUpdate(user) {
      return controller.post(
        'auth/password/request', {
          email: user.email
        })
        .then((response) => {
          return response;
        });
    },
    passwordUpdate(user) {
      return controller.post(
        'auth/password/update', {
          password: user.password,
          token: user.token
        })
        .then((response) => {
          return response;
        });
    },
    verify(user) {
      return controller.post(
        'auth/verify', {
          token: user.token
        })
        .then((response) => {
          return response;
        });
    },
  },
  cleanerApi: {
    addCleaner({ token, cleaner }) {
      return controller.post(
        'cleaners/create', {
          token: token,
          cleaner: {
            name: cleaner.name,
            description: cleaner.description,
            gallery: cleaner.gallery,
            services: cleaner.services
          }
        })
        .then((response) => {
          return response;
        });
    },
    gallery({ url, format }) {
      return controller.post(
        'cleaners/gallery', {
          file: {
            format,
            dataUrl: url
          }
        })
        .then((response) => {
          return response;
        });
    }
  }
};

export default api;
export const userApi = api.userApi;
export const cleanerApi = api.cleanerApi;
