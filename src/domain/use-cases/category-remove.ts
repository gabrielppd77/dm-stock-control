import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';

type Request = string;

type Response = void;

@Injectable()
export class CategoryRemove {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: Request): Promise<Response> {
    const categoryToRemove = await this.categoryRepository.getById(id);

    if (!categoryToRemove) {
      throw new NotFoundException();
    }

    const productsCount = await this.categoryRepository.countProducts(id);

    if (productsCount > 0) {
      throw new ConflictException(
        `Category has relation with ${productsCount} products, remove the products to remove category`,
      );
    }

    await this.categoryRepository.remove(id);
  }
}
