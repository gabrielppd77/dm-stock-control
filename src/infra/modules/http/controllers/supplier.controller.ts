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

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';
import { SupplierListByQuery } from '@domain/use-cases/supplier-list-by-query';
import { SupplierGetBySearchField } from '@domain/use-cases/supplier-get-by-search-field';

import { SupplierCreateDTO } from '@core/dtos/supplier-create.dto';
import { SupplierUpdateDTO } from '@core/dtos/supplier-update.dto';

import { PaginationQuery } from '@core/queries/pagination.query';
import { SearchFieldQuery } from '@core/queries/search-field.query';

import { PaginationPresenter } from '../presenters/pagination.presenter';
import { SupplierPresenter } from '../presenters/supplier.presenter';

@Controller('/suppliers')
export class SupplierController {
  constructor(
    private supplierCreate: SupplierCreate,
    private supplierUpdate: SupplierUpdate,
    private supplierRemove: SupplierRemove,
    private supplierListByQuery: SupplierListByQuery,
    private supplierGetBySearchField: SupplierGetBySearchField,
  ) {}

  @Post()
  async create(@Body() body: SupplierCreateDTO) {
    await this.supplierCreate.execute(body);
  }

  @Put(':id')
  async update(@Body() body: SupplierUpdateDTO, @Param('id') id: string) {
    await this.supplierUpdate.execute({
      id,
      data: body,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.supplierRemove.execute(id);
  }

  @Get()
  async getListByQuery(
    @Query() queries: PaginationQuery,
  ): Promise<PaginationPresenter> {
    const { suppliers, count } = await this.supplierListByQuery.execute(
      queries,
    );

    const suppliersPresenters = suppliers.map((d) => new SupplierPresenter(d));

    return new PaginationPresenter(
      suppliersPresenters,
      count,
      queries.size,
      queries.page,
    );
  }

  @Get('/get-by-search-field')
  async getBySearchField(
    @Query() queries: SearchFieldQuery,
  ): Promise<SupplierPresenter[]> {
    const suppliers = await this.supplierGetBySearchField.execute(queries);
    return suppliers.map((d) => new SupplierPresenter(d));
  }
}
