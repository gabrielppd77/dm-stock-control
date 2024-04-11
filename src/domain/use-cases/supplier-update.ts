import { Injectable, NotFoundException } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { SupplierUpdateDTO } from '@core/dtos/supplier-update.dto';

interface Request {
  id: string;
  data: SupplierUpdateDTO;
}

type Response = void;

@Injectable()
export class SupplierUpdate {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    // const { id, data } = req;
    // const supplierToUpdate = await this.supplierRepository.getById(id);
    // if (!supplierToUpdate) {
    //   throw new NotFoundException();
    // }
    // supplierToUpdate.name = data.name;
    // await this.supplierRepository.update(id, supplierToUpdate);
  }
}
