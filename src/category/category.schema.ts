import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @Prop({ isRequired: true })
  categoryName: string;

  @Prop({ isRequired: false, default: null })
  description: string;

  @Prop({ isRequired: false, default: null })
  iconUrl: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
