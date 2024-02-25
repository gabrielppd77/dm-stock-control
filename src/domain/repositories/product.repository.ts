import { Product } from '@domain/entities/product';
import { ProductListQuery } from '@domain/queries/product-list.query';

export abstract class ProductRepository {
  abstract createMany(products: Product[]): Promise<void>;
  abstract getById(id: string): Promise<Product | null>;
  abstract update(productId: string, productUpdated: Product): Promise<void>;
  abstract remove(productId: string): Promise<void>;
  abstract getByQuery(query: ProductListQuery): Promise<Product[]>;
  abstract countByQuery(query: ProductListQuery): Promise<number>;
}
