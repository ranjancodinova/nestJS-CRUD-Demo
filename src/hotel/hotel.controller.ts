import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HotelService } from './hotel.service';
import {IHotel, ILocation} from './hotel.types';
import {JwtAuthGuard} from '../auth/jwt-auth.guard'

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':_id')
  findHotelById(@Param() params:any) {
    return this.hotelService.findHotelById(params?._id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('searchHotel')
  findHotelsByLocation(@Body() location: ILocation) {
    return this.hotelService.findHotelsByLocation(location);
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  addHotel(@Body() hotel:IHotel) {
    return this.hotelService.addHotel(hotel);
  }
}
