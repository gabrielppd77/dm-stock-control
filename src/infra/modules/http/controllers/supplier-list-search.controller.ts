import { Controller, Get, Query } from '@nestjs/common';

import { SupplierListSearch } from '@domain/use-cases/supplier-list-search';

import { SupplierPresenter } from '../../../../domain/presenters/supplier.presenter';
import { SimpleSearchQuery } from '@domain/queries/simple-search.query';

@Controller('/suppliers')
export class SupplierListSearchController {
  constructor(private supplierListSearch: SupplierListSearch) {}

  @Get('/search')
  async handle(
    @Query() queries: SimpleSearchQuery<SupplierPresenter>,
  ): Promise<SupplierPresenter[]> {
    return await this.supplierListSearch.execute(queries);
  }
}
