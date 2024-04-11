import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';

type Request = string;

type Response = void;

@Injectable()
export class SupplierRemove {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(id: Request): Promise<Response> {
    // const supplierToRemove = await this.supplierRepository.getById(id);
    // if (!supplierToRemove) {
    //   throw new NotFoundException();
    // }
    // const productsCount = await this.supplierRepository.countProducts(id);
    // if (productsCount > 0) {
    //   throw new ConflictException(
    //     `Supplier has relation with ${productsCount} products, remove the products to remove supllier`,
    //   );
    // }
    // await this.supplierRepository.remove(id);
  }
}
