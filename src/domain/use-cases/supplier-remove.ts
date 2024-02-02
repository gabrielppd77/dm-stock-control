import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

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

    const productsCount = await this.supplierRepository.countProducts(
      supplierId,
    );

    if (productsCount > 0) {
      throw new ConflictException(
        `Supplier has relation with ${productsCount} products, remove the products to remove supllier`,
      );
    }

    await this.supplierRepository.remove(supplierId);
  }
}
