import { Category } from '@domain/entities/category';
import { PaginationQuery } from '@core/queries/pagination.query';
import { SearchFieldQuery } from '@core/queries/search-field.query';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract getById(id: string): Promise<Category | null>;
  abstract update(categoryId: string, categoryUpdated: Category): Promise<void>;
  abstract countProducts(categoryId: string): Promise<number>;
  abstract remove(categoryId: string): Promise<void>;
  abstract getByQuery(query: PaginationQuery): Promise<Category[]>;
  abstract countByQuery(query: PaginationQuery): Promise<number>;
  abstract getBySearchField(query: SearchFieldQuery): Promise<Category[]>;
}
