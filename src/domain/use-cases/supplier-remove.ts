import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';

@Injectable()
export class SupplierRemove {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(id: string): Promise<void> {
    const supplierToRemove = await this.supplierRepository.getById(id);

    if (!supplierToRemove) {
      throw new NotFoundException();
    }

    const productsCount = await this.supplierRepository.countProducts(id);

    if (productsCount > 0) {
      throw new ConflictException(
        `Fornecedor tem relação com ${productsCount} produtos, remova os produtos para remover o fornecedor`,
      );
    }
    await this.supplierRepository.remove(id);
  }
}
