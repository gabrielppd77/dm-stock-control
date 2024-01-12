import { Controller, Body, Post } from '@nestjs/common';

import { ProductCreate } from '@domain/use-cases/product-create';

import { ProductCreateDTO } from '../dtos/product-create.dto';

@Controller('/products')
export class ProductCreateController {
  constructor(private productCreate: ProductCreate) {}

  @Post()
  async handle(@Body() body: ProductCreateDTO) {
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

    await this.productCreate.execute({
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
    });
  }
}
