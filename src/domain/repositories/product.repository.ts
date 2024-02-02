import { Product } from '@domain/entities/product';

export abstract class ProductRepository {
  abstract createMany(products: Product[]): Promise<void>;
  abstract getById(id: string): Promise<Product | null>;
  abstract update(productId: string, productUpdated: Product): Promise<void>;
  abstract remove(productId: string): Promise<void>;
  abstract getAll(filters: {
    supplierId?: string;
    categoryId?: string;
    dtEntryFilter?: {
      dtInitial: string;
      dtEnd: string;
    };
    dtDepartureFilter?: {
      dtInitial: string;
      dtEnd: string;
    };
    fiscalNoteEntry?: string;
    fiscalNoteDeparture?: string;
    nrClient?: string;
    onlyUnavaibles?: boolean;
  }): Promise<Product[]>;
}
