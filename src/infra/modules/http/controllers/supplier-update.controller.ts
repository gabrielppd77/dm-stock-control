import { Controller, Body, Put, Param } from '@nestjs/common';

import { SupplierUpdate } from '@domain/use-cases/supplier-update';

import { SupplierUpdateDTO } from '../dtos/supplier-update.dto';

@Controller('/suppliers')
export class SupplierUpdateController {
  constructor(private supplierUpdate: SupplierUpdate) {}

  @Put(':id')
  async handle(
    @Body() body: SupplierUpdateDTO,
    @Param('id') supplierId: string,
  ) {
    const { name } = body;

    await this.supplierUpdate.execute({
      supplierId,
      fields: { name },
    });
  }
}
