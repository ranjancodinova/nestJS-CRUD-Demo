export interface IUser {
  id: string;
  username: string;
  email: string;
  password:string;
}
export interface ICredential {
  email: string;
  password:string;
}

export interface IErrorResponse {
  status: number;
  message: string;
}
