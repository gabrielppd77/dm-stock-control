import { Injectable } from '@nestjs/common';

import { UniqueEntityID } from '@core/common/entities/unique-entity-id';

import { Product } from '@domain/entities/product';
import { ProductRepository } from '@domain/repositories/product.repository';

interface Request {
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
}

type Response = void;

@Injectable()
export class ProductCreate {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
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
    } = req;

    const product = new Product({
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
    });

    await this.productRepository.create(product);
  }
}
