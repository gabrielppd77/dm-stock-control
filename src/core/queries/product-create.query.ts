import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ProductCreateQuery {
  @IsNumber()
  @Type(() => Number)
  replicate: number;
}
