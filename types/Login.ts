export interface ILoginResponse {
  data: {
    token: string;
    message: string;
    user: IUserAuth;
  };
}

export interface IUserAuth {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}
