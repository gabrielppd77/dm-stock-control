import { Supplier } from '@domain/entities/supplier';

export abstract class SupplierRepository {
  abstract create(supplier: Supplier): Promise<void>;
}
