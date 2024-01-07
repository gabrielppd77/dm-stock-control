import { Entity } from '@core/common/entities/entity';

interface ProductProps {
  name: string;
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name;
  }
}
