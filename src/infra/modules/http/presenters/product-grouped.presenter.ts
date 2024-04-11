import { ProductPresenter } from './product.presenter';

export class ProductGroupedPresenter {
  name: string;
  supplierId: string;
  categoryId: string;
  supplierName: string;
  categoryName: string;
  totalAvailable: number;
  products: ProductPresenter[];
}
