import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';

import { ProductUpdateDTO } from '@domain/dtos/product-update.dto';

interface Request {
  id: string;
  data: ProductUpdateDTO;
}

type Response = void;

@Injectable()
export class ProductUpdate {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
    const { id, data } = req;

    const productToUpdate = await this.productRepository.getById(id);

    if (!productToUpdate) {
      throw new NotFoundException();
    }

    productToUpdate.name = data.name;
    productToUpdate.color = data.color;
    productToUpdate.fabric = data.fabric;
    productToUpdate.measure = data.measure;
    productToUpdate.dtEntry = data.dtEntry;
    productToUpdate.dtDeparture = data.dtDeparture;
    productToUpdate.nrClient = data.nrClient;
    productToUpdate.fiscalNoteEntry = data.fiscalNoteEntry;
    productToUpdate.fiscalNoteDeparture = data.fiscalNoteDeparture;
    productToUpdate.status = data.status;

    await this.productRepository.update(id, productToUpdate);
  }
}
