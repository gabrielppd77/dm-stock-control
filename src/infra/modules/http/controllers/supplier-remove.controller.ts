import { Controller, Delete, Param } from '@nestjs/common';

import { SupplierRemove } from '@domain/use-cases/supplier-remove';

@Controller('/suppliers')
export class SupplierRemoveController {
  constructor(private supplierRemove: SupplierRemove) {}

  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.supplierRemove.execute(id);
  }
}
