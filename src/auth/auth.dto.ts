import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { UsesTypes } from './auth.types';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({message:'First name is required field'})
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty({message:'Username is required field'})
  @Length(6,255,{message:'Username must be greater than 5 character'})
  username: string;

  @ApiProperty()
  @IsNotEmpty({message:'Email is required field'})
  email: string;
  
  @ApiProperty()
  @IsNotEmpty({message:'Password is required field'})
  @Length(6,255,{message:'Password must be greater than 5 character'})
  password: string;

  @ApiProperty()
  usesType: UsesTypes;
}
