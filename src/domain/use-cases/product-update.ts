import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';

import { StatusProductEnum } from '@domain/enums/status-product.enum';

interface Request {
  productId: string;
  fields: {
    name: string;
    color?: string;
    fabric?: string;
    measure?: string;
    dtEntry?: string;
    dtDeparture?: string;
    nrClient?: string;
    fiscalNoteEntry?: string;
    fiscalNoteDeparture?: string;
    status: StatusProductEnum;
  };
}

type Response = void;

@Injectable()
export class ProductUpdate {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
    const { productId, fields } = req;

    const productToUpdate = await this.productRepository.getById(productId);

    if (!productToUpdate) {
      throw new NotFoundException();
    }

    productToUpdate.name = fields.name;
    productToUpdate.color = fields.color;
    productToUpdate.fabric = fields.fabric;
    productToUpdate.measure = fields.measure;
    productToUpdate.dtEntry = fields.dtEntry;
    productToUpdate.dtDeparture = fields.dtDeparture;
    productToUpdate.nrClient = fields.nrClient;
    productToUpdate.fiscalNoteEntry = fields.fiscalNoteEntry;
    productToUpdate.fiscalNoteDeparture = fields.fiscalNoteDeparture;
    productToUpdate.status = fields.status;

    await this.productRepository.update(productId, productToUpdate);
  }
}
