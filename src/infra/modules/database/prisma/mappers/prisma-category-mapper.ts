import { Category } from '@domain/entities/category';
import { Category as CategoryPrisma } from '@prisma/client';

export class PrismaCategoryMapper {
  static toPrisma(category: Category): CategoryPrisma {
    return {
      id: category.id.toValue(),
      name: category.name,
    };
  }
  static toDomain(categoryPrisma: CategoryPrisma): Category {
    return new Category(
      {
        name: categoryPrisma.name,
      },
      categoryPrisma.id,
    );
  }
}
