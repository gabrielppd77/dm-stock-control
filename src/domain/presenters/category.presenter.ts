import { Category } from '@domain/entities/category';

export class CategoryPresenter {
  id: string;
  name: string;

  constructor(category: Category) {
    this.id = category.id.toValue();
    this.name = category.name;
  }
}
