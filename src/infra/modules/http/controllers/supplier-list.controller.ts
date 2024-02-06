import { Controller, Get, Query } from '@nestjs/common';

import { SupplierList } from '@domain/use-cases/supplier-list';

import { SupplierPresenter } from '../presenters/supplier.presenter';
import { PaginationQuery } from '../queries/pagination.query';
import { PaginationPresenter } from '../presenters/pagination.presenter';

@Controller('/suppliers')
export class SupplierListController {
  constructor(private supplierList: SupplierList) {}

  @Get()
  async handle(
    @Query() queries: PaginationQuery<SupplierPresenter>,
  ): Promise<PaginationPresenter<SupplierPresenter[]>> {
    const { page, size, sort, order, search, field } = queries;

    const { data, total } = await this.supplierList.execute({
      page,
      size,
      order,
      sort,
      search,
      field,
    });

    const suppliersFormated = data.map<SupplierPresenter>(
      (d) => new SupplierPresenter(d),
    );

    return new PaginationPresenter(suppliersFormated, total, size, page);
  }
}
