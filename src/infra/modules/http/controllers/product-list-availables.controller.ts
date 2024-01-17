import { Controller, Get, Query } from '@nestjs/common';

import { ProductListAvailables } from '@domain/use-cases/product-list-availables';

import { ProductUnavailablesPresenter } from '../presenters/product-unavailables.presenter';
import { ProductListAvailablesQuery } from '../queries/product-list-availables.query';

@Controller('/products/availables')
export class ProductListAvailablesController {
  constructor(private productListAvailables: ProductListAvailables) {}

  @Get()
  async handle(
    @Query() queries: ProductListAvailablesQuery,
  ): Promise<ProductUnavailablesPresenter[]> {
    const { products } = await this.productListAvailables.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductUnavailablesPresenter>(
      (d) => new ProductUnavailablesPresenter(d),
    );

    return productsFormated;
  }
}
