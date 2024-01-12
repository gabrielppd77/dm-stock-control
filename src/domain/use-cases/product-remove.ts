import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';

interface Request {
  productId: string;
}

type Response = void;

@Injectable()
export class ProductRemove {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
    const { productId } = req;

    const productToRemove = await this.productRepository.getById(productId);

    if (!productToRemove) {
      throw new NotFoundException();
    }

    await this.productRepository.remove(productId);
  }
}
