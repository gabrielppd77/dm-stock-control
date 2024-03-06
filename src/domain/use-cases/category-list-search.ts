import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { CategoryPresenter } from '@domain/presenters/category.presenter';
import { SimpleSearchQuery } from '@domain/queries/simple-search.query';

type Request = SimpleSearchQuery<CategoryPresenter>;

type Response = CategoryPresenter[];

@Injectable()
export class CategoryListSearch {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const categories = await this.categoryRepository.getByQuerySearch(req);
    return categories.map((d) => new CategoryPresenter(d));
  }
}
