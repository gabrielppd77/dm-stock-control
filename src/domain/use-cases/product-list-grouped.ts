import { Injectable } from '@nestjs/common';

import { ProductList } from './product-list';

import { ProductGroupedPresenter } from '@infra/modules/http/presenters/product-grouped.presenter';
import { PaginationPresenter } from '@infra/modules/http/presenters/pagination.presenter';
import { ProductListQuery } from '@core/queries/product-list.query';

type Request = ProductListQuery;

// type Response = PaginationPresenter<ProductGroupedPresenter[]>;

@Injectable()
export class ProductListGrouped {
  constructor(private productList: ProductList) {}

  async execute(req: Request): Promise<void> {
    // const { data, pagination } = await this.productList.execute(req);
    // const newData: ProductGroupedPresenter[] = [];
    // data.forEach((product) => {
    //   const index = newData.findIndex((d) => d.name === product.name);
    //   if (index === -1) {
    //     newData.push({
    //       name: product.name,
    //       supplierId: product.supplierId,
    //       categoryId: product.categoryId,
    //       supplierName: product.supplierName,
    //       categoryName: product.categoryName,
    //       totalAvailable: 0,
    //       products: [product],
    //     });
    //   } else {
    //     newData[index].products.push(product);
    //   }
    // });
    // return new PaginationPresenter(
    //   newData,
    //   pagination.length,
    //   pagination.size,
    //   pagination.page,
    // );
  }
}
