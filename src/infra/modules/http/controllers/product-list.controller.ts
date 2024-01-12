import { Controller, Get } from '@nestjs/common';

import { ProductList } from '@domain/use-cases/product-list';

import { ProductPresenter } from '../presenters/product.presenter';

@Controller('/products')
export class ProductListController {
  constructor(private productList: ProductList) {}

  @Get()
  async handle(): Promise<ProductPresenter[]> {
    const { products } = await this.productList.execute();

    const productsFormated = products.map<ProductPresenter>(
      (d) => new ProductPresenter(d),
    );

    return productsFormated;
  }
}
