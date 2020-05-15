import controller from './controller';

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
    }
  }
};

export default api;
export const userApi = api.userApi;
