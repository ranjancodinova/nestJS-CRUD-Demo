import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HotelService } from './hotel.service';
import {IHotel, ILocation} from './hotel.types';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Get(':_id')
  findHotelById(@Param() params:any) {
    return this.hotelService.findHotelById(params?._id);
  }
  @Post('searchHotel')
  findHotelsByLocation(@Body() location: ILocation) {
    return this.hotelService.findHotelsByLocation(location);
  }
  @Post('add')
  addHotel(@Body() hotel:IHotel) {
    return this.hotelService.addHotel(hotel);
  }
}
