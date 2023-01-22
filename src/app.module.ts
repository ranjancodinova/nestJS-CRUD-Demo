import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [
    AuthModule,
    HotelModule,
    CategoryModule,
    MongooseModule.forRoot('mongodb://localhost/hotelbooking'),
  ],
})
export class AppModule {}
