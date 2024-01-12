import { Controller, Delete, Param } from '@nestjs/common';

import { ProductRemove } from '@domain/use-cases/product-remove';

@Controller('/products')
export class ProductRemoveController {
  constructor(private productRemove: ProductRemove) {}

  @Delete(':id')
  async handle(@Param('id') productId: string) {
    await this.productRemove.execute({
      productId,
    });
  }
}
