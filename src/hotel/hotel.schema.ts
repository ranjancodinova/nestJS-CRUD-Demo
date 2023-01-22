import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ICoordinates } from './hotel.types';

export type HotelDocument = HydratedDocument<Hotel>;

class Coordinates {
  @Prop()
  latitude: number;
  @Prop()
  longitude: number;
}

@Schema({ timestamps: true })
export class Hotel {
  @Prop({ isRequired: true })
  hotelName: string;

  @Prop({ isRequired: true })
  description: string;

  @Prop({ isRequired: true })
  owner: string;

  @Prop({ isRequired: true })
  city: string;

  @Prop({ isRequired: true })
  address: string;

  @Prop({ isRequired: true })
  coordinates: Coordinates;

  @Prop({ isRequired: true })
  email: string;

  @Prop({ isRequired: true })
  phone: string;

  @Prop({ isRequired: true })
  countryCode: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
