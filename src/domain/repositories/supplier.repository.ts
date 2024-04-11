import { Supplier } from '@domain/entities/supplier';
import { PaginationQuery } from '@core/queries/pagination.query';
import { SearchFieldQuery } from '@core/queries/search-field.query';

export abstract class SupplierRepository {
  abstract create(supplier: Supplier): Promise<void>;
  abstract getById(id: string): Promise<Supplier | null>;
  abstract update(supplierId: string, supplierUpdated: Supplier): Promise<void>;
  abstract countProducts(supplierId: string): Promise<number>;
  abstract remove(supplierId: string): Promise<void>;
  abstract getByQuery(query: PaginationQuery): Promise<Supplier[]>;
  abstract countByQuery(query: PaginationQuery): Promise<number>;
  abstract getBySearchField(query: SearchFieldQuery): Promise<Supplier[]>;
}
