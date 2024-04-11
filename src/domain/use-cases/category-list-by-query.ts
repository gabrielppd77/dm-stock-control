import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { PaginationQuery } from '@core/queries/pagination.query';
import { Category } from '@domain/entities/category';

interface Response {
  categories: Category[];
  count: number;
}

@Injectable()
export class CategoryListByQuery {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: PaginationQuery): Promise<Response> {
    const categories = await this.categoryRepository.getByQuery(req);
    const count = await this.categoryRepository.countByQuery(req);
    return {
      categories,
      count,
    };
  }
}
