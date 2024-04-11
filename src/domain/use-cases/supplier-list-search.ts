import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { SupplierPresenter } from '@infra/modules/http/presenters/supplier.presenter';
import { SearchFieldQuery } from '@core/queries/search-field.query';

type Request = SearchFieldQuery;

type Response = SupplierPresenter[];

@Injectable()
export class SupplierListSearch {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<void> {
    //   const suppliers = await this.supplierRepository.getByQuerySearch(req);
    //   return suppliers.map((d) => new SupplierPresenter(d));
  }
}
