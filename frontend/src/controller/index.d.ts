declare namespace Api {
  interface Api {
    userApi: {
      signup: (user: UserRegistration) => Promise<any>;
      signin: (user: UserAuthorization) => Promise<any>;
      passwordRequestUpdate: (user: UserPasswordRequestUpdate) => Promise<any>;
      passwordUpdate: (user: UserPasswordUpdate) => Promise<any>;
      verify: (user: UserVerify) => Promise<any>;
    }
  }

  interface User { }

  interface UserAuthorization extends User {
    email: string;
    password: string
  }

  interface UserRegistration extends User {
    firstName: string,
    lastName: string,
    password: string,
    wantBeAdmin: boolean
  }

  interface UserPasswordRequestUpdate extends User {
    email: string
  }

  interface UserPasswordUpdate extends User {
    password: string,
    token: string
  }

  interface UserVerify extends User {
    token: string | null;
  }
}
