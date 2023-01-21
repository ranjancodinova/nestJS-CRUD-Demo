import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { HotelController } from './hotel.controller';
import { Hotel, HotelSchema} from './hotel.schema';
import { HotelService } from './hotel.service';

@Module({
  imports: [MongooseModule.forFeature([{ name:Hotel.name , schema: HotelSchema }]),AuthModule],
  controllers: [HotelController],
  providers: [HotelService]
})
export class HotelModule {}
