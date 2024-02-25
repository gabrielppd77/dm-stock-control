import { Controller, Get, Query } from '@nestjs/common';

import { CategoryList } from '@domain/use-cases/category-list';

import { CategoryPresenter } from '../../../../domain/presenters/category.presenter';
import { PaginationPresenter } from '../../../../domain/presenters/pagination.presenter';
import { PaginationQuery } from '../../../../domain/queries/pagination.query';

@Controller('/categories')
export class CategoryListController {
  constructor(private categoryList: CategoryList) {}

  @Get()
  async handle(
    @Query() queries: PaginationQuery<CategoryPresenter>,
  ): Promise<PaginationPresenter<CategoryPresenter[]>> {
    return await this.categoryList.execute(queries);
  }
}
