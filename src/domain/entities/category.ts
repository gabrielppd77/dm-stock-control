import { Entity } from '@core/common/entities/entity';

interface CategoryPropsOverride
  extends Omit<CategoryProps, 'status' | 'createdAt' | 'updatedAt'> {
  createdAt?: string;
  updatedAt?: string;
}

interface CategoryProps {
  name: string;

  createdAt: string;
  updatedAt: string;
}

export class Category extends Entity<CategoryProps> {
  constructor(props: CategoryPropsOverride, id?: string) {
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
