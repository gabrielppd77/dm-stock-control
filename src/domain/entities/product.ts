import { Entity } from '@core/common/entities/entity';
import { UniqueEntityID } from '@core/common/entities/unique-entity-id';

interface ProductProps {
  supplierId: UniqueEntityID;
  categoryId: UniqueEntityID;

  name: string;
  color?: string;
  fabric?: string;
  measure?: string;
  dtEntry?: Date;
  dtDeparture?: Date;
  nrClient?: string;
  fiscalNoteEntry?: string;
  fiscalNoteDeparture?: string;
  status?: StatusProduct;
}

export class Product extends Entity<ProductProps> {
  get supplierId() {
    return this.props.supplierId;
  }
  get categoryId() {
    return this.props.categoryId;
  }
  get name() {
    return this.props.name;
  }
  get color() {
    return this.props.color;
  }
  get fabric() {
    return this.props.fabric;
  }
  get measure() {
    return this.props.measure;
  }
  get dtEntry() {
    return this.props.dtEntry;
  }
  get dtDeparture() {
    return this.props.dtDeparture;
  }
  get nrClient() {
    return this.props.nrClient;
  }
  get fiscalNoteEntry() {
    return this.props.fiscalNoteEntry;
  }
  get fiscalNoteDeparture() {
    return this.props.fiscalNoteDeparture;
  }
  get status() {
    return this.props.status;
  }
}
