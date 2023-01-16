import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [
    AuthModule,
    HotelModule,
    MongooseModule.forRoot('mongodb://localhost/hotelbooking'),
  ],
})
export class AppModule {}
