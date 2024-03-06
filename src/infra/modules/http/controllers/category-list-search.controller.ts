import { Controller, Get, Query } from '@nestjs/common';

import { CategoryListSearch } from '@domain/use-cases/category-list-search';

import { CategoryPresenter } from '../../../../domain/presenters/category.presenter';
import { SimpleSearchQuery } from '@domain/queries/simple-search.query';

@Controller('/categories')
export class CategoryListSearchController {
  constructor(private categoryListSearch: CategoryListSearch) {}

  @Get('/search')
  async handle(
    @Query() queries: SimpleSearchQuery<CategoryPresenter>,
  ): Promise<CategoryPresenter[]> {
    return await this.categoryListSearch.execute(queries);
  }
}
