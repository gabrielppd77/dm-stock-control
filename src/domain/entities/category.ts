import { Entity } from '@core/common/entities/entity';

interface CategoryProps {
  name: string;
}

export class Category extends Entity<CategoryProps> {
  get name() {
    return this.props.name;
  }
}
