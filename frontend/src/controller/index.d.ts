declare namespace Api {
  interface Api {
    userApi: {
      signup: (user: User) => Promise;
    }
  }

  type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    wantBeAdmin: boolean
  }
}