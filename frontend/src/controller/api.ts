import controller from './controller';

const api: Api.Api = {
  userApi: {
    signup(user) {
      return controller.post('auth/registration', { user })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    signin(user) {
      return controller.post('auth/login', { user })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    passwordRequestUpdate(user) {
      return controller.post('auth/password/request', { email: user.email })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    }
  }
};

export default api;
export const userApi = api.userApi;
