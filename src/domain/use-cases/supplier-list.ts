import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { Supplier } from '@domain/entities/supplier';

interface Response {
  suppliers: Supplier[];
}

@Injectable()
export class SupplierList {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(): Promise<Response> {
    const suppliers = await this.supplierRepository.getAll();
    return { suppliers };
  }
}
