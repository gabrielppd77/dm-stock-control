import { Injectable, NotFoundException } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';

interface Request {
  supplierId: string;
  fields: {
    name: string;
  };
}

type Response = void;

@Injectable()
export class SupplierUpdate {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    const { supplierId, fields } = req;

    const supplierToUpdate = await this.supplierRepository.getById(supplierId);

    if (!supplierToUpdate) {
      throw new NotFoundException();
    }

    supplierToUpdate.name = fields.name;

    await this.supplierRepository.update(supplierId, supplierToUpdate);
  }
}
