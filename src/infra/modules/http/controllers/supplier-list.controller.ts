import { Controller, Get, Query } from '@nestjs/common';

import { SupplierList } from '@domain/use-cases/supplier-list';

import { SupplierPresenter } from '../presenters/supplier.presenter';
import { PaginationQuery } from '../../../../core/queries/pagination.query';
import { PaginationPresenter } from '../presenters/pagination.presenter';

@Controller('/suppliers')
export class SupplierListController {
  constructor(private supplierList: SupplierList) {}

  @Get()
  async handle(@Query() queries: PaginationQuery): Promise<void> {
    // return await this.supplierList.execute(queries);
  }
}
