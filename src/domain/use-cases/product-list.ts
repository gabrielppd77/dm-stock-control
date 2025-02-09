import { Injectable, BadRequestException } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductPresenter } from '@infra/modules/http/presenters/product.presenter';
import { PaginationPresenter } from '@infra/modules/http/presenters/pagination.presenter';
import { ProductListQuery } from '@core/queries/product-list.query';

type Request = ProductListQuery;

// type Response = PaginationPresenter<ProductPresenter[]>;

@Injectable()
export class ProductList {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<void> {
    // const { dtEntryInitial, dtEntryEnd, dtDepartureInitial, dtDepartureEnd } =
    //   req;
    // if ((dtEntryInitial && !dtEntryEnd) || (!dtEntryInitial && dtEntryEnd)) {
    //   throw new BadRequestException('Date entry filter has incomplent');
    // }
    // if (
    //   (dtDepartureInitial && !dtDepartureEnd) ||
    //   (!dtDepartureInitial && dtDepartureEnd)
    // ) {
    //   throw new BadRequestException('Date departure filter has incomplent');
    // }
    // const products = await this.productRepository.getByQuery(req);
    // const total = await this.productRepository.countByQuery(req);
    // const productsPresenter = products.map((d) => new ProductPresenter(d));
    // return new PaginationPresenter(
    //   productsPresenter,
    //   total,
    //   req.size,
    //   req.page,
    // );
  }
}
