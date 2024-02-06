import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { Category } from '@domain/entities/category';

interface Request {
  page: number;
  size: number;
  order: 'asc' | 'desc';
  sort?: keyof Category;
  search?: string;
  field?: keyof Category;
}

interface Response {
  data: Category[];
  total: number;
}

@Injectable()
export class CategoryList {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const { page, size, sort, order, search, field } = req;

    const { data, total } = await this.categoryRepository.getAll(
      page,
      size,
      order,
      sort,
      search,
      field,
    );
    return { data, total };
  }
}
