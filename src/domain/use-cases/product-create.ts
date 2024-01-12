import { Injectable, BadRequestException } from '@nestjs/common';

import { UniqueEntityID } from '@core/common/entities/unique-entity-id';

import { Product } from '@domain/entities/product';
import { ProductRepository } from '@domain/repositories/product.repository';

interface Request {
  replicate: number;
  fields: {
    supplierId: string;
    categoryId: string;
    name: string;
    color?: string;
    fabric?: string;
    measure?: string;
    dtEntry?: string;
    dtDeparture?: string;
    nrClient?: string;
    fiscalNoteEntry?: string;
    fiscalNoteDeparture?: string;
  };
}

type Response = void;

@Injectable()
export class ProductCreate {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
    const { replicate, fields } = req;
    const {
      supplierId,
      categoryId,
      name,
      color,
      fabric,
      measure,
      dtEntry,
      dtDeparture,
      nrClient,
      fiscalNoteEntry,
      fiscalNoteDeparture,
    } = fields;

    if (replicate > 100) {
      throw new BadRequestException(
        'The number of replications exceeds 100, please report less',
      );
    }

    const products: Product[] = [];

    for (let index = 0; index < replicate; index++) {
      products.push(
        new Product({
          supplierId: new UniqueEntityID(supplierId),
          categoryId: new UniqueEntityID(categoryId),
          name,
          color,
          fabric,
          measure,
          dtEntry,
          dtDeparture,
          nrClient,
          fiscalNoteEntry,
          fiscalNoteDeparture,
        }),
      );
    }

    await this.productRepository.createMany(products);
  }
}
