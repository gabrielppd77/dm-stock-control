import { IsUUID, IsString } from 'class-validator';

export class SupplierUpdateDTO {
  @IsUUID()
  supplierId: string;
  @IsString()
  name: string;
}
