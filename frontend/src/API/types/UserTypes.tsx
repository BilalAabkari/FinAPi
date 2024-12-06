export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}

export type UserInfo = {
  username: string;
  email: string;
  name: string;
  surname: string;
};
