import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class ProductListQuery {
  @IsUUID()
  @IsOptional()
  supplierId?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsDateString()
  @IsOptional()
  dtEntryInitial?: string;

  @IsDateString()
  @IsOptional()
  dtEntryEnd?: string;

  @IsDateString()
  @IsOptional()
  dtDepartureInitial?: string;

  @IsDateString()
  @IsOptional()
  dtDepartureEnd?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  isOnlyAvaiables?: boolean;

  @IsOptional()
  @IsString()
  nrClient?: string;

  @IsOptional()
  @IsString()
  fiscalNoteEntry?: string;

  @IsOptional()
  @IsString()
  fiscalNoteDeparture?: string;
}
