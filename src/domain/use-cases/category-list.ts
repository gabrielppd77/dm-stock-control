import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { PaginationQuery } from '@domain/queries/pagination.query';
import { CategoryPresenter } from '@domain/presenters/category.presenter';
import { PaginationPresenter } from '@domain/presenters/pagination.presenter';

type Request = PaginationQuery<CategoryPresenter>;
type Response = PaginationPresenter<CategoryPresenter[]>;

@Injectable()
export class CategoryList {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(req: Request): Promise<Response> {
    const categories = await this.categoryRepository.getByQuery(req);
    const total = await this.categoryRepository.countByQuery(req);

    const categoriesPresenters = categories.map(
      (d) => new CategoryPresenter(d),
    );

    return new PaginationPresenter(
      categoriesPresenters,
      total,
      req.size,
      req.page,
    );
  }
}
