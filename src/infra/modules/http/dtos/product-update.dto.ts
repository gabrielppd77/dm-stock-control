import { StatusProductEnum } from '@domain/enums/status-product.enum';
import { IsDateString, IsOptional, IsString, IsEnum } from 'class-validator';

export class ProductUpdateDTO {
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
  @IsEnum(StatusProductEnum)
  status: StatusProductEnum;
}
