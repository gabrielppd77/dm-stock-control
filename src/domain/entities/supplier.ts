import { Entity } from '@core/common/entities/entity';

interface SupplierPropsOverride
  extends Omit<SupplierProps, 'status' | 'createdAt' | 'updatedAt'> {
  createdAt?: string;
  updatedAt?: string;
}

interface SupplierProps {
  name: string;

  createdAt: string;
  updatedAt: string;
}

export class Supplier extends Entity<SupplierProps> {
  constructor(props: SupplierPropsOverride, id?: string) {
    super(
      {
        ...props,
        createdAt: props.createdAt ? props.createdAt : new Date().toISOString(),
        updatedAt: props.updatedAt ? props.updatedAt : new Date().toISOString(),
      },
      id,
    );
  }

  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.createdAt;
  }
}
