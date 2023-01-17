import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ICoordinates } from './hotel.types';

export class CreateHotelDto {
  @ApiProperty()
  @IsNotEmpty({message:'Hotel Name is required field'})
  hotelName: string;
  
  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsNotEmpty({message:'Owner Name is required field'})
  owner: string;

  @ApiProperty()
  @IsNotEmpty({message:'City is required field'})
  city: string;

  @ApiProperty()
  @IsNotEmpty({message:'Address is required field'})
  address: string;

  @ApiProperty()
  @IsNotEmpty({message:'Hotel location is required field'})
  coordinates: ICoordinates;

  @ApiProperty()
  @IsNotEmpty({message:'Email is required field'})
  email: string;

  @ApiProperty()
  @IsNotEmpty({message:'Phone is required field'})
  phone: string;

  @ApiProperty()
  @IsNotEmpty({message:'Country code is required field'})
  countryCode: string;
}
