import { Controller, Body, Put, Param } from '@nestjs/common';

import { ProductUpdate } from '@domain/use-cases/product-update';

import { ProductUpdateDTO } from '../../../../domain/dtos/product-update.dto';

@Controller('/products')
export class ProductUpdateController {
  constructor(private productUpdate: ProductUpdate) {}

  @Put(':id')
  async handle(@Body() body: ProductUpdateDTO, @Param('id') id: string) {
    await this.productUpdate.execute({
      id,
      data: body,
    });
  }
}
