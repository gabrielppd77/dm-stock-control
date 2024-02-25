import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { CategoryUpdateDTO } from '@domain/dtos/category-update.dto';

interface Request {
  id: string;
  data: CategoryUpdateDTO;
}

type Response = void;

@Injectable()
export class CategoryUpdate {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const { id, data } = req;

    const categoryToUpdate = await this.categoryRepository.getById(id);

    if (!categoryToUpdate) {
      throw new NotFoundException();
    }

    categoryToUpdate.name = data.name;

    await this.categoryRepository.update(id, categoryToUpdate);
  }
}
