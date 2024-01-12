import { Controller, Body, Put, Param } from '@nestjs/common';

import { ProductUpdate } from '@domain/use-cases/product-update';

import { ProductUpdateDTO } from '../dtos/product-update.dto';

@Controller('/products')
export class ProductUpdateController {
  constructor(private productUpdate: ProductUpdate) {}

  @Put(':id')
  async handle(@Body() body: ProductUpdateDTO, @Param('id') productId: string) {
    const {
      name,
      color,
      fabric,
      measure,
      dtEntry,
      dtDeparture,
      nrClient,
      fiscalNoteEntry,
      fiscalNoteDeparture,
      status,
    } = body;

    await this.productUpdate.execute({
      productId,
      fields: {
        name,
        color,
        fabric,
        measure,
        dtEntry,
        dtDeparture,
        nrClient,
        fiscalNoteEntry,
        fiscalNoteDeparture,
        status,
      },
    });
  }
}
