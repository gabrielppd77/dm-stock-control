import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';

@Injectable()
export class CategoryRemove {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    const categoryToRemove = await this.categoryRepository.getById(id);

    if (!categoryToRemove) {
      throw new NotFoundException();
    }

    const productsCount = await this.categoryRepository.countProducts(id);

    if (productsCount > 0) {
      throw new ConflictException(
        `Categoria tem relação com ${productsCount} produtos, remova os produtos para remover a categoria`,
      );
    }

    await this.categoryRepository.remove(id);
  }
}
