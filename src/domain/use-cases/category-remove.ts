import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';

interface Request {
  categoryId: string;
}

type Response = void;

@Injectable()
export class CategoryRemove {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const { categoryId } = req;

    const categoryToRemove = await this.categoryRepository.getById(categoryId);

    if (!categoryToRemove) {
      throw new NotFoundException();
    }

    const productsCount = await this.categoryRepository.countProducts(
      categoryId,
    );

    if (productsCount > 0) {
      throw new ConflictException(
        `Category has relation with ${productsCount} products, remove the products to remove category`,
      );
    }

    await this.categoryRepository.remove(categoryId);
  }
}
