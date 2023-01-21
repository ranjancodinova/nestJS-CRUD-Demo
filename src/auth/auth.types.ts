export interface IUser {
  firstName:string;
  lastName:string;
  username: string;
  email: string;
  password:string;
  access_token:string;
}
export interface ICredential {
  email: string;
  password:string;
}

export interface IErrorResponse {
  status: number;
  message: string;
}
