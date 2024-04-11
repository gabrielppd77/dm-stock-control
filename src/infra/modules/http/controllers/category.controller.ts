import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

import { CategoryCreate } from '@domain/use-cases/category-create';
import { CategoryUpdate } from '@domain/use-cases/category-update';
import { CategoryRemove } from '@domain/use-cases/category-remove';
import { CategoryListByQuery } from '@domain/use-cases/category-list-by-query';
import { CategoryGetBySearchField } from '@domain/use-cases/category-get-by-search-field';

import { CategoryCreateDTO } from '@core/dtos/category-create.dto';
import { CategoryUpdateDTO } from '@core/dtos/category-update.dto';

import { PaginationQuery } from '@core/queries/pagination.query';
import { SearchFieldQuery } from '@core/queries/search-field.query';

import { PaginationPresenter } from '../presenters/pagination.presenter';
import { CategoryPresenter } from '../presenters/category.presenter';

@Controller('/categories')
export class CategoryController {
  constructor(
    private categoryCreate: CategoryCreate,
    private categoryUpdate: CategoryUpdate,
    private categoryRemove: CategoryRemove,
    private categoryListByQuery: CategoryListByQuery,
    private categoryGetBySearchField: CategoryGetBySearchField,
  ) {}

  @Post()
  async create(@Body() body: CategoryCreateDTO) {
    await this.categoryCreate.execute(body);
  }

  @Put(':id')
  async update(@Body() body: CategoryUpdateDTO, @Param('id') id: string) {
    await this.categoryUpdate.execute({
      id,
      data: body,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.categoryRemove.execute(id);
  }

  @Get()
  async getListByQuery(
    @Query() queries: PaginationQuery,
  ): Promise<PaginationPresenter> {
    const { categories, count } = await this.categoryListByQuery.execute(
      queries,
    );

    const categoriesPresenters = categories.map(
      (d) => new CategoryPresenter(d),
    );

    return new PaginationPresenter(
      categoriesPresenters,
      count,
      queries.size,
      queries.page,
    );
  }

  @Get('/get-by-search-field')
  async getBySearchField(
    @Query() queries: SearchFieldQuery,
  ): Promise<CategoryPresenter[]> {
    const categories = await this.categoryGetBySearchField.execute(queries);
    return categories.map((d) => new CategoryPresenter(d));
  }
}
