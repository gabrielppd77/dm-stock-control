import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';

type Request = string;

type Response = void;

@Injectable()
export class ProductRemove {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: Request): Promise<Response> {
    const productToRemove = await this.productRepository.getById(id);

    if (!productToRemove) {
      throw new NotFoundException();
    }

    await this.productRepository.remove(id);
  }
}
