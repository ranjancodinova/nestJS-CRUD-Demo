import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ICategory } from './category.types';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('category')
export class CategoryController {
  constructor(private category: CategoryService) {}

  @Get(':_id')
  findHotelById(@Param() params: any) {
    return this.category.findCategoryById(params?._id);
  }

  @Get()
  findCategories() {
    return this.category.findCategories();
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  addHotel(@Body() category: ICategory) {
    return this.category.addCategory(category);
  }
}
