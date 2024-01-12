import { Product } from '@domain/entities/product';

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  abstract getById(id: string): Promise<Product | null>;
  abstract update(productId: string, productUpdated: Product): Promise<void>;
  abstract remove(productId: string): Promise<void>;
  abstract getAll(): Promise<Product[]>;
}
