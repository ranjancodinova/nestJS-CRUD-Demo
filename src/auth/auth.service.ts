import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './auth.dto';
import { User, UserDocument } from './auth.schema';
import { ICredential, IErrorResponse, IUser } from './auth.types';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  users: IUser[]=[];
  async getLoggedInUser(_id:string):Promise<User> {
    return await this.userModel.findOne({_id:_id}).exec()
  }

 async userLogin(credential:ICredential):Promise<User|string> {
    let userExist= await this.userModel.findOne({email:credential.email}).exec();
    if(userExist){
      userExist=await this.userModel.findOne({password:credential.password}).exec();
      if(userExist){
        return userExist;
      }
      return "Email or password may incorrect";
    }
    return "User does not exist with this email/userId";
  }

  @UsePipes(ValidationPipe)
 async userSignUp(createUserDto: CreateUserDto):Promise<User> {
    return await new this.userModel(createUserDto).save();
  }
}
