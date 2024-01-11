import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';

interface Request {
  categoryId: string;
  name: string;
}

type Response = void;

@Injectable()
export class CategoryUpdate {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const { categoryId, name } = req;

    const categoryToUpdate = await this.categoryRepository.getById(categoryId);

    if (!categoryToUpdate) {
      throw new NotFoundException();
    }

    categoryToUpdate.name = name;

    await this.categoryRepository.update(categoryId, categoryToUpdate);
  }
}
