import { Product } from '@domain/entities/product';
import { StatusProductEnum } from '@domain/enums/status-product.enum';

export class ProductUnavailablesPresenter {
  id: string;
  name: string;
  supplierName: string;
  categoryName: string;
  color?: string;
  fabric?: string;
  measure?: string;
  dtEntry?: string;
  dtDeparture?: string;
  nrClient?: string;
  fiscalNoteEntry?: string;
  fiscalNoteDeparture?: string;
  status: StatusProductEnum;

  constructor(product: Product) {
    this.id = product.id.toValue();
    this.name = product.name;
    this.supplierName = product.supplier?.name || 'supplier';
    this.categoryName = product.category?.name || 'category';
    this.color = product.color;
    this.fabric = product.fabric;
    this.measure = product.measure;
    this.dtEntry = product.dtEntry;
    this.dtDeparture = product.dtDeparture;
    this.nrClient = product.nrClient;
    this.fiscalNoteEntry = product.fiscalNoteEntry;
    this.fiscalNoteDeparture = product.fiscalNoteDeparture;
    this.status = product.status;
  }
}
