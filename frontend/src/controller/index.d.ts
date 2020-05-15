declare namespace Api {
  interface Api {
    userApi: {
      signup: (user: UserRegistration) => Promise;
      signin: (user: UserAuthorization) => Promise;
      passwordRequestUpdate: (user: UserPasswordRequestUpdate) => Promise;
      passwordUpdate: (user: UserPasswordUpdate) => Promise;
    }
  }


  type UserAuthorization = {
    email: string;
    password: string
  }

  type UserRegistration = {
    firstName: string,
    lastName: string,
    password: string,
    wantBeAdmin: boolean
  }

  type UserPasswordRequestUpdate = {
    email: string
  }

  type UserPasswordUpdate = {
    password: string,
    token: string
  }
}
