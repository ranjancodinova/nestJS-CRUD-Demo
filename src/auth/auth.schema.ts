import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UsesTypes } from './auth.types';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ isRequired: true })
  firstName: string;

  @Prop({ isRequired: false, default: '' })
  lastName: string;

  @Prop({ isRequired: false, default: '' })
  username: string;

  @Prop({ isRequired: true })
  email: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop({ isRequired: false, default: null })
  access_token: string;

  @Prop({ isRequired: false, default: 'Guest' })
  userType: UsesTypes;
}

export const UserSchema = SchemaFactory.createForClass(User);
