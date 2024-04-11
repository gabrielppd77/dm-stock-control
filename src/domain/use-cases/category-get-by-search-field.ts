import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { Category } from '@domain/entities/category';

import { SearchFieldQuery } from '@core/queries/search-field.query';

@Injectable()
export class CategoryGetBySearchField {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: SearchFieldQuery): Promise<Category[]> {
    return await this.categoryRepository.getBySearchField(req);
  }
}
