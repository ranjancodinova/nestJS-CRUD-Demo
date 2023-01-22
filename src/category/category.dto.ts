import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Category Name is required field' })
  categoryName: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  iconUrl?: string;
}
