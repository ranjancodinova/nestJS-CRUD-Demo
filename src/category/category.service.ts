import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './category.dto';
import { Category,CategoryDocument } from './category.schema';
import { ICategory } from './category.types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  hotels: ICategory[] = [];
  async findCategoryById(_id: string):Promise<Category> {
    return await this.categoryModel.findOne({ _id: _id }).exec();
  }

  async findCategories():Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async addCategory(createCategoryDto: CreateCategoryDto):Promise<Category>  {
    return await new this.categoryModel(createCategoryDto).save();
  }
}
