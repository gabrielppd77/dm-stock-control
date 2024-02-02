import { IsNumber, IsString } from 'class-validator';

export class PaginationQuery {
  @IsNumber()
  page: number;

  @IsNumber()
  size: number;

  @IsString()
  sort: string;

  @IsString()
  order: 'asc' | 'desc';

  @IsString()
  search: string;

  @IsString()
  field: string;
}
