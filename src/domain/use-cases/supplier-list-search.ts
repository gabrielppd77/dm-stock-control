import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { SupplierPresenter } from '@domain/presenters/supplier.presenter';
import { SimpleSearchQuery } from '@domain/queries/simple-search.query';

type Request = SimpleSearchQuery<SupplierPresenter>;

type Response = SupplierPresenter[];

@Injectable()
export class SupplierListSearch {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    const suppliers = await this.supplierRepository.getByQuerySearch(req);
    return suppliers.map((d) => new SupplierPresenter(d));
  }
}
