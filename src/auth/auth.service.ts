import { Injectable } from '@nestjs/common';
import { ICredential, IErrorResponse, IUser } from './auth.types';

@Injectable()
export class AuthService {
  users: IUser[]=[];
  getLoggedInUser() {
    return {
      id: '1',
      username: 'ranjan12',
      email: 'ranjan12@gmail.com',
    };
  }

  userLogin(credential:ICredential) {
    const user = this.users.filter(
      (user) => user.email === credential.email && user.password === credential.password,
    );
    if (user.length) {
      return user;
    }
    return {
      status: 401,
      message: 'Invalid credential',
    };
  }

  userSignUp(user: IUser) {
    this.users.push(user);
    return user;
  }
}
