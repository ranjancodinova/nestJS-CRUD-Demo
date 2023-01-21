import { Body, Controller, Get, Param, ParamData, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './auth.dto';
import { AuthService } from './auth.service';
import { ICredential } from './auth.types';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':_id')
  getLoggedInUser(@Param() params:any) {
    return this.authService.getLoggedInUser(params?._id);
  }

  @Post('login')
  userLogin(@Body() credential:ICredential) {
    return this.authService.userLogin(credential);
  }
  @Post('signup')
  @UsePipes(ValidationPipe)
  userSignUp(@Body() user:CreateUserDto) {
    return this.authService.userSignUp(user);
  }
}
