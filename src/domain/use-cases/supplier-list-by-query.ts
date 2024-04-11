import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { PaginationQuery } from '@core/queries/pagination.query';
import { Supplier } from '@domain/entities/supplier';

interface Response {
  suppliers: Supplier[];
  count: number;
}

@Injectable()
export class SupplierListByQuery {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: PaginationQuery): Promise<Response> {
    const suppliers = await this.supplierRepository.getByQuery(req);
    const count = await this.supplierRepository.countByQuery(req);
    return {
      suppliers,
      count,
    };
  }
}
