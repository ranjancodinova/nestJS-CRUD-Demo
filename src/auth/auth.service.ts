import { Injectable } from '@nestjs/common';
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
    const userExist= await this.userModel.findOne({email:credential.email}).exec();
    if(userExist){
      return await this.userModel.findOne({password:credential.password}).exec();
    }
    return "User does not exist with this email/userId";
  }

 async userSignUp(createUserDto: CreateUserDto):Promise<User> {
    return await new this.userModel(createUserDto).save();
  }
}
