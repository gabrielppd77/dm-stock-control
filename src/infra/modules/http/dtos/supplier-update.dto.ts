import { IsString } from 'class-validator';

export class SupplierUpdateDTO {
  @IsString()
  name: string;
}
