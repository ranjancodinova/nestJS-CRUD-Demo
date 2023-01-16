import { Body, Controller, Get, Param, ParamData, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ICredential, IUser } from './auth.types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get(':_id')
  getLoggedInUser(@Param() params:any) {
    return this.authService.getLoggedInUser(params?._id);
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
