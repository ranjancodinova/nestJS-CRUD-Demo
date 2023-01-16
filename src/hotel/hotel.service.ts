import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHotelDto } from './hotel.dto';
import { Hotel, HotelDocument } from './hotel.schema';
import { IHotel, ILocation } from './hotel.types';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  hotels: IHotel[] = [];
  async findHotelById(_id: string):Promise<Hotel> {
    return await this.hotelModel.findOne({ _id: _id }).exec();
  }

  async findHotelsByLocation(location: ILocation) {
    return 'User does not exist with this email/userId';
  }

  async addHotel(createHotelDto: CreateHotelDto):Promise<Hotel>  {
    return await new this.hotelModel(createHotelDto).save();
  }
}
