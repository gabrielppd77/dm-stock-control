import { Product } from '@domain/entities/product';
import { StatusProductEnum } from '@domain/enums/status-product.enum';

export class ProductPresenter {
  id: string;
  name: string;
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
