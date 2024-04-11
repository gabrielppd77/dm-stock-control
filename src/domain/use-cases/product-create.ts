import { Injectable, BadRequestException } from '@nestjs/common';

import { UniqueEntityID } from '@core/common/entities/unique-entity-id';

import { Product } from '@domain/entities/product';
import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductCreateDTO } from '@core/dtos/product-create.dto';

interface Request {
  replicate: number;
  data: ProductCreateDTO;
}

type Response = void;

@Injectable()
export class ProductCreate {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
    // const { replicate, data } = req;
    // if (replicate > 100) {
    //   throw new BadRequestException(
    //     'The number of replications exceeds 100, please report less',
    //   );
    // }
    // const products: Product[] = [];
    // for (let index = 0; index < replicate; index++) {
    //   products.push(
    //     new Product({
    //       supplierId: new UniqueEntityID(data.supplierId),
    //       categoryId: new UniqueEntityID(data.categoryId),
    //       name: data.name,
    //       color: data.color,
    //       fabric: data.fabric,
    //       measure: data.measure,
    //       dtEntry: data.dtEntry,
    //       dtDeparture: data.dtDeparture,
    //       nrClient: data.nrClient,
    //       fiscalNoteEntry: data.fiscalNoteEntry,
    //       fiscalNoteDeparture: data.fiscalNoteDeparture,
    //     }),
    //   );
    // }
    // await this.productRepository.createMany(products);
  }
}
