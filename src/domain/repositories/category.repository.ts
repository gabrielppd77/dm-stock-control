import { Category } from '@domain/entities/category';
import { CategoryPresenter } from '@domain/presenters/category.presenter';
import { PaginationQuery } from '@domain/queries/pagination.query';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract getById(id: string): Promise<Category | null>;
  abstract update(categoryId: string, categoryUpdated: Category): Promise<void>;
  abstract remove(categoryId: string): Promise<void>;
  abstract getByQuery(
    query: PaginationQuery<CategoryPresenter>,
  ): Promise<Category[]>;
  abstract countByQuery(
    query: PaginationQuery<CategoryPresenter>,
  ): Promise<number>;
  abstract countProducts(categoryId: string): Promise<number>;
}
