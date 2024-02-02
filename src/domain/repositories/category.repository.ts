import { Category } from '@domain/entities/category';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract getById(id: string): Promise<Category | null>;
  abstract update(categoryId: string, categoryUpdated: Category): Promise<void>;
  abstract remove(categoryId: string): Promise<void>;
  abstract getAll(): Promise<Category[]>;
  abstract countProducts(categoryId: string): Promise<number>;
}
