import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ICredential, IUser } from './auth.types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('user')
  getLoggedInUser() {
    return this.authService.getLoggedInUser();
  }
  @Post('login')
  userLogin(@Body() credential:ICredential) {
    return this.authService.userLogin(credential);
  }
  @Post('signup')
  userSignUp(@Body() user:IUser) {
    return this.authService.userSignUp(user);
  }
}
