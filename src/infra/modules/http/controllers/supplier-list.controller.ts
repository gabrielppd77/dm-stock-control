import { Controller, Get, Query } from '@nestjs/common';

import { SupplierList } from '@domain/use-cases/supplier-list';

import { SupplierPresenter } from '../../../../domain/presenters/supplier.presenter';
import { PaginationQuery } from '../../../../domain/queries/pagination.query';
import { PaginationPresenter } from '../../../../domain/presenters/pagination.presenter';

@Controller('/suppliers')
export class SupplierListController {
  constructor(private supplierList: SupplierList) {}

  @Get()
  async handle(
    @Query() queries: PaginationQuery<SupplierPresenter>,
  ): Promise<PaginationPresenter<SupplierPresenter[]>> {
    return await this.supplierList.execute(queries);
  }
}
