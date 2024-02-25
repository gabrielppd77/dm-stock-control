import { IsString } from 'class-validator';

export class SupplierCreateDTO {
  @IsString()
  name: string;
}
