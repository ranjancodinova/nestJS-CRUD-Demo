import { ApiProperty } from '@nestjs/swagger';
import { ICoordinates } from './hotel.types';

export class CreateHotelDto {
  @ApiProperty()
  hotelName: string;
  
  @ApiProperty()
  description: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  coordinates: ICoordinates;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
}
