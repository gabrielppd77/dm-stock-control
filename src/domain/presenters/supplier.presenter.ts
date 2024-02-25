import { Supplier } from '@domain/entities/supplier';

export class SupplierPresenter {
  id: string;
  name: string;

  constructor(supplier: Supplier) {
    this.id = supplier.id.toValue();
    this.name = supplier.name;
  }
}
