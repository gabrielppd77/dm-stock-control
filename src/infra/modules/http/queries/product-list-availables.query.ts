import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class ProductListAvailablesQuery {
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

  @IsOptional()
  @IsString()
  fiscalNoteEntry?: string;

  @IsOptional()
  @IsString()
  fiscalNoteDeparture?: string;
}
