import { Supplier } from '@domain/entities/supplier';

export abstract class SupplierRepository {
  abstract create(supplier: Supplier): Promise<void>;
  abstract getById(id: string): Promise<Supplier | null>;
  abstract update(supplierId: string, supplierUpdated: Supplier): Promise<void>;
  abstract remove(supplierId: string): Promise<void>;
  abstract getAll(): Promise<Supplier[]>;
}
