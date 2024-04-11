import { Injectable } from '@nestjs/common';

import { Supplier } from '@domain/entities/supplier';
import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { SupplierCreateDTO } from '@core/dtos/supplier-create.dto';

type Request = SupplierCreateDTO;

type Response = void;

@Injectable()
export class SupplierCreate {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    // const { name } = req;
    // const supplier = new Supplier({
    //   name,
    // });
    // await this.supplierRepository.create(supplier);
  }
}
