import { Controller, Post, Body, Query } from '@nestjs/common';

import { ProductCreate } from '@domain/use-cases/product-create';

import { ProductCreateDTO } from '../../../../domain/dtos/product-create.dto';
import { ProductCreateQuery } from '../../../../domain/queries/product-create.query';

@Controller('/products')
export class ProductCreateController {
  constructor(private productCreate: ProductCreate) {}

  @Post()
  async handle(
    @Body() body: ProductCreateDTO,
    @Query() queries: ProductCreateQuery,
  ) {
    const { replicate } = queries;

    await this.productCreate.execute({
      replicate,
      data: body,
    });
  }
}
