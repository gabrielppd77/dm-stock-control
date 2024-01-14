import { Category } from '@domain/entities/category';
import { Category as CategoryPrisma } from '@prisma/client';

export class PrismaCategoryMapper {
  static toPrisma(category: Category): CategoryPrisma {
    return {
      id: category.id.toValue(),
      name: category.name,
      createdAt: new Date(category.createdAt),
      updatedAt: new Date(category.updatedAt),
    };
  }
  static toDomain(categoryPrisma: CategoryPrisma): Category {
    return new Category(
      {
        name: categoryPrisma.name,
        createdAt: categoryPrisma.createdAt?.toISOString() || undefined,
        updatedAt: categoryPrisma.updatedAt?.toISOString() || undefined,
      },
      categoryPrisma.id,
    );
  }
}
