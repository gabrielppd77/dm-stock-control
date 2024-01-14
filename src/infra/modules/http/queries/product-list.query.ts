import { IsDateString, IsOptional, IsUUID } from 'class-validator';

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
}
