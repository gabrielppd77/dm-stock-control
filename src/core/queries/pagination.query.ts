import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PaginationQuery {
  @Type(() => Number)
  @IsNumber()
  page: number;

  @Type(() => Number)
  @IsNumber()
  size: number;

  @IsString()
  @IsOptional()
  sort?: string;

  @IsString()
  @IsOptional()
  order: 'asc' | 'desc' = 'asc';

  @IsString()
  @IsOptional()
  search?: string;

  @IsString()
  @IsOptional()
  field?: string;
}
