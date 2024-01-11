import { Injectable, NotFoundException } from '@nestjs/common';

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

    await this.categoryRepository.remove(categoryId);
  }
}
