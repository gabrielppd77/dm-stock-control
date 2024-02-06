import { Controller, Get, Query } from '@nestjs/common';

import { CategoryList } from '@domain/use-cases/category-list';

import { CategoryPresenter } from '../presenters/category.presenter';
import { PaginationPresenter } from '../presenters/pagination.presenter';
import { PaginationQuery } from '../queries/pagination.query';

@Controller('/categories')
export class CategoryListController {
  constructor(private categoryList: CategoryList) {}

  @Get()
  async handle(
    @Query() queries: PaginationQuery<CategoryPresenter>,
  ): Promise<PaginationPresenter<CategoryPresenter[]>> {
    const { page, size, sort, order, search, field } = queries;

    const { data, total } = await this.categoryList.execute({
      page,
      size,
      order,
      sort,
      search,
      field,
    });

    const categoriesFormated = data.map<CategoryPresenter>(
      (d) => new CategoryPresenter(d),
    );

    return new PaginationPresenter(categoriesFormated, total, size, page);
  }
}
