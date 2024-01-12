import { Injectable } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';
import { Product } from '@domain/entities/product';

interface Response {
  products: Product[];
}

@Injectable()
export class ProductList {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Response> {
    const products = await this.productRepository.getAll();
    return { products };
  }
}
