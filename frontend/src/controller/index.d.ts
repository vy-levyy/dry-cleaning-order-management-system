declare namespace Api {
  interface Api {
    userApi: {
      signup: (user: RegistrationUser) => Promise;
      signin: (user: AuthorizationUser) => Promise;
    }
  }

  type User = {
    email: string;
  }

  type AuthorizationUser = User & {
    password: string
  }

  type RegistrationUser = User & {
    firstName: string,
    lastName: string,
    password: string,
    wantBeAdmin: boolean
  }
}