import { IsUUID, IsString, IsOptional, IsDateString } from 'class-validator';

export class ProductCreateDTO {
  @IsUUID()
  supplierId: string;
  @IsUUID()
  categoryId: string;
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  color?: string;
  @IsString()
  @IsOptional()
  fabric?: string;
  @IsString()
  @IsOptional()
  measure?: string;
  @IsDateString()
  @IsOptional()
  dtEntry?: string;
  @IsDateString()
  @IsOptional()
  dtDeparture?: string;
  @IsString()
  @IsOptional()
  nrClient?: string;
  @IsString()
  @IsOptional()
  fiscalNoteEntry?: string;
  @IsString()
  @IsOptional()
  fiscalNoteDeparture?: string;
}
