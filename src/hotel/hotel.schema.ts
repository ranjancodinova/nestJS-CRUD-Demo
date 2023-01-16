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

@Schema()
export class Hotel {
  @Prop()
  hotelName: string;

  @Prop()
  description: string;

  @Prop()
  owner: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  coordinates: Coordinates;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
