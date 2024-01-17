import { Controller, Get, Query } from '@nestjs/common';

import { ProductListUnavailables } from '@domain/use-cases/product-list-unavailables';

import { ProductUnavailablesPresenter } from '../presenters/product-unavailables.presenter';
import { ProductListUnavailablesQuery } from '../queries/product-list-unavailables.query';

@Controller('/products/unavailables')
export class ProductListUnavailablesController {
  constructor(private productListUnavailables: ProductListUnavailables) {}

  @Get()
  async handle(
    @Query() queries: ProductListUnavailablesQuery,
  ): Promise<ProductUnavailablesPresenter[]> {
    const { products } = await this.productListUnavailables.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductUnavailablesPresenter>(
      (d) => new ProductUnavailablesPresenter(d),
    );

    return productsFormated;
  }
}
