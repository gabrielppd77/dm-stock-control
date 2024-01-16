import { Controller, Get, Query } from '@nestjs/common';

import { ProductList } from '@domain/use-cases/product-list';

import { ProductPresenter } from '../presenters/product.presenter';
import { ProductListQuery } from '../queries/product-list.query';

@Controller('/products')
export class ProductListController {
  constructor(private productList: ProductList) {}

  @Get()
  async handle(
    @Query() queries: ProductListQuery,
  ): Promise<ProductPresenter[]> {
    const { products } = await this.productList.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductPresenter>(
      (d) => new ProductPresenter(d),
    );

    return productsFormated;
  }
}
