import { Controller, Get, Query } from '@nestjs/common';

import { SupplierListSearch } from '@domain/use-cases/supplier-list-search';

import { SupplierPresenter } from '../presenters/supplier.presenter';
import { SearchFieldQuery } from '@core/queries/search-field.query';

@Controller('/suppliers')
export class SupplierListSearchController {
  constructor(private supplierListSearch: SupplierListSearch) {}

  @Get('/search')
  async handle(@Query() queries: SearchFieldQuery): Promise<void> {
    // return await this.supplierListSearch.execute(queries);
  }
}
