import { Controller, Body, Put } from '@nestjs/common';

import { SupplierUpdate } from '@domain/use-cases/supplier-update';

import { SupplierUpdateDTO } from '../dtos/supplier-update.dto';

@Controller('/suppliers')
export class SupplierUpdateController {
  constructor(private supplierUpdate: SupplierUpdate) {}

  @Put()
  async handle(@Body() body: SupplierUpdateDTO) {
    const { supplierId, name } = body;

    await this.supplierUpdate.execute({
      supplierId,
      name,
    });
  }
}
