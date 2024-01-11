import { Controller, Get } from '@nestjs/common';

import { SupplierList } from '@domain/use-cases/supplier-list';

import { SupplierPresenter } from '../presenters/supplier.presenter';

@Controller('/suppliers')
export class SupplierListController {
  constructor(private supplierList: SupplierList) {}

  @Get()
  async handle(): Promise<SupplierPresenter[]> {
    const { suppliers } = await this.supplierList.execute();

    const suppliersFormated = suppliers.map<SupplierPresenter>(
      (d) => new SupplierPresenter(d),
    );

    return suppliersFormated;
  }
}
