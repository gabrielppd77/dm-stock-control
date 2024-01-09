import { Injectable } from '@nestjs/common';

import { Supplier } from '@domain/entities/supplier';
import { SupplierRepository } from '@domain/repositories/supplier.repository';

interface Request {
  name: string;
}

type Response = void;

@Injectable()
export class CreateSupplier {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    const { name } = req;

    const supplier = new Supplier({
      name,
    });

    await this.supplierRepository.create(supplier);
  }
}
