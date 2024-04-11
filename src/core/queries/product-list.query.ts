import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsOptional, IsUUID } from 'class-validator';

import { PaginationQuery } from './pagination.query';
import { ProductPresenter } from '@infra/modules/http/presenters/product.presenter';

export class ProductListQuery extends PaginationQuery {
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
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  onlyUnavaibles?: boolean;
}
