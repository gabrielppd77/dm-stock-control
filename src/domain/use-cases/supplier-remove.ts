import { Injectable, NotFoundException } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';

interface Request {
  supplierId: string;
}

type Response = void;

@Injectable()
export class SupplierRemove {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    const { supplierId } = req;

    const supplierToRemove = await this.supplierRepository.getById(supplierId);

    if (!supplierToRemove) {
      throw new NotFoundException();
    }

    await this.supplierRepository.remove(supplierId);
  }
}
