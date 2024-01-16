import { Entity } from '@core/common/entities/entity';

interface SupplierProps {
  name: string;
}

export class Supplier extends Entity<SupplierProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }
}
