import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { Supplier } from '@domain/entities/supplier';

import { SearchFieldQuery } from '@core/queries/search-field.query';

@Injectable()
export class SupplierGetBySearchField {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: SearchFieldQuery): Promise<Supplier[]> {
    return await this.supplierRepository.getBySearchField(req);
  }
}
