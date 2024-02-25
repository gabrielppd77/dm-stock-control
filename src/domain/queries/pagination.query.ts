import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PaginationQuery<DataType> {
  @Type(() => Number)
  @IsNumber()
  page: number;

  @Type(() => Number)
  @IsNumber()
  size: number;

  @IsString()
  @IsOptional()
  sort?: keyof DataType;

  @IsString()
  @IsOptional()
  order: 'asc' | 'desc' = 'asc';

  @IsString()
  @IsOptional()
  search?: string;

  @IsString()
  @IsOptional()
  field?: keyof DataType;
}
