import { Controller, Post, Body, Query } from '@nestjs/common';

import { ProductCreate } from '@domain/use-cases/product-create';

import { ProductCreateDTO } from '../dtos/product-create.dto';
import { ProductCreateQuery } from '../queries/product-create.query';

@Controller('/products')
export class ProductCreateController {
  constructor(private productCreate: ProductCreate) {}

  @Post()
  async handle(
    @Body() body: ProductCreateDTO,
    @Query() queries: ProductCreateQuery,
  ) {
    const {
      supplierId,
      categoryId,
      name,
      color,
      fabric,
      measure,
      dtEntry,
      dtDeparture,
      nrClient,
      fiscalNoteEntry,
      fiscalNoteDeparture,
    } = body;
    const { replicate } = queries;

    await this.productCreate.execute({
      replicate,
      fields: {
        supplierId,
        categoryId,
        name,
        color,
        fabric,
        measure,
        dtEntry,
        dtDeparture,
        nrClient,
        fiscalNoteEntry,
        fiscalNoteDeparture,
      },
    });
  }
}
