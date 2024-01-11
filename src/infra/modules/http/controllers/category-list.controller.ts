import { Controller, Get } from '@nestjs/common';

import { CategoryList } from '@domain/use-cases/category-list';

import { CategoryPresenter } from '../presenters/category.presenter';

@Controller('/categories')
export class CategoryListController {
  constructor(private categoryList: CategoryList) {}

  @Get()
  async handle(): Promise<CategoryPresenter[]> {
    const { categories } = await this.categoryList.execute();

    const categoriesFormated = categories.map<CategoryPresenter>(
      (d) => new CategoryPresenter(d),
    );

    return categoriesFormated;
  }
}
