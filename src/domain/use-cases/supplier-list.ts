import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { PaginationQuery } from '@core/queries/pagination.query';
import { SupplierPresenter } from '@infra/modules/http/presenters/supplier.presenter';
import { PaginationPresenter } from '@infra/modules/http/presenters/pagination.presenter';

// type Request = PaginationQuery<SupplierPresenter>;

// type Response = PaginationPresenter<SupplierPresenter[]>;

@Injectable()
export class SupplierList {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: void): Promise<void> {
    // const suppliers = await this.supplierRepository.getByQuery(req);
    // const total = await this.supplierRepository.countByQuery(req);
    // const suppliersPresenters = suppliers.map((d) => new SupplierPresenter(d));
    // return new PaginationPresenter(
    //   suppliersPresenters,
    //   total,
    //   req.size,
    //   req.page,
    // );
  }
}
