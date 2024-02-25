import { Supplier } from '@domain/entities/supplier';
import { SupplierPresenter } from '@domain/presenters/supplier.presenter';
import { PaginationQuery } from '@domain/queries/pagination.query';

export abstract class SupplierRepository {
  abstract create(supplier: Supplier): Promise<void>;
  abstract getById(id: string): Promise<Supplier | null>;
  abstract update(supplierId: string, supplierUpdated: Supplier): Promise<void>;
  abstract remove(supplierId: string): Promise<void>;
  abstract getByQuery(
    query: PaginationQuery<SupplierPresenter>,
  ): Promise<Supplier[]>;
  abstract countByQuery(
    query: PaginationQuery<SupplierPresenter>,
  ): Promise<number>;
  abstract countProducts(supplierId: string): Promise<number>;
}
