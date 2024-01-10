import { Controller, Body, Post } from '@nestjs/common';

import { SupplierCreate } from '@domain/use-cases/supplier-create';

import { SupplierCreateDTO } from '../dtos/supplier-create.dto';

@Controller('/suppliers')
export class SupplierCreateController {
  constructor(private supplierCreate: SupplierCreate) {}

  @Post()
  async handle(@Body() body: SupplierCreateDTO) {
    const { name } = body;

    await this.supplierCreate.execute({
      name,
    });
  }
}
