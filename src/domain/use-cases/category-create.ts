import { Injectable } from '@nestjs/common';

import { Category } from '@domain/entities/category';
import { CategoryRepository } from '@domain/repositories/category.repository';

interface Request {
  name: string;
}

type Response = void;

@Injectable()
export class CategoryCreate {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const { name } = req;

    const category = new Category({
      name,
    });

    await this.categoryRepository.create(category);
  }
}
