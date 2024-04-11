import { Injectable } from '@nestjs/common';

import { Category } from '@domain/entities/category';
import { CategoryRepository } from '@domain/repositories/category.repository';

import { CategoryCreateDTO } from '@core/dtos/category-create.dto';

@Injectable()
export class CategoryCreate {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: CategoryCreateDTO): Promise<void> {
    const { name } = req;

    const category = new Category({
      name,
    });

    await this.categoryRepository.create(category);
  }
}
