import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';

interface Request {
  categoryId: string;
  fields: {
    name: string;
  };
}

type Response = void;

@Injectable()
export class CategoryUpdate {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const { categoryId, fields } = req;

    const categoryToUpdate = await this.categoryRepository.getById(categoryId);

    if (!categoryToUpdate) {
      throw new NotFoundException();
    }

    categoryToUpdate.name = fields.name;

    await this.categoryRepository.update(categoryId, categoryToUpdate);
  }
}
