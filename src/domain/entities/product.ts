import { Entity } from '@core/common/entities/entity';
import { UniqueEntityID } from '@core/common/entities/unique-entity-id';
import { StatusProductEnum } from '@domain/enums/status-product.enum';

interface ProductPropsOverride
  extends Omit<ProductProps, 'status' | 'createdAt' | 'updatedAt'> {
  status?: StatusProductEnum;
  createdAt?: string;
  updatedAt?: string;
}

interface ProductProps {
  supplierId: UniqueEntityID;
  categoryId: UniqueEntityID;

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

  createdAt: string;
  updatedAt: string;
}

export class Product extends Entity<ProductProps> {
  constructor(props: ProductPropsOverride, id?: string) {
    super(
      {
        ...props,
        status: props.status || StatusProductEnum.AVAILABLE,
        createdAt: props.createdAt ? props.createdAt : new Date().toISOString(),
        updatedAt: props.updatedAt ? props.updatedAt : new Date().toISOString(),
      },
      id,
    );
  }

  get supplierId() {
    return this.props.supplierId;
  }
  set supplierId(supplierId: UniqueEntityID) {
    this.props.supplierId = supplierId;
  }

  get categoryId() {
    return this.props.categoryId;
  }
  set categoryId(categoryId: UniqueEntityID) {
    this.props.categoryId = categoryId;
  }

  get name() {
    return this.props.name;
  }
  set name(name: string) {
    this.props.name = name;
  }

  get color() {
    return this.props.color;
  }
  set color(color: string | undefined) {
    this.props.color = color;
  }

  get fabric() {
    return this.props.fabric;
  }
  set fabric(fabric: string | undefined) {
    this.props.fabric = fabric;
  }

  get measure() {
    return this.props.measure;
  }
  set measure(measure: string | undefined) {
    this.props.measure = measure;
  }

  get dtEntry() {
    return this.props.dtEntry;
  }
  set dtEntry(dtEntry: string | undefined) {
    this.props.dtEntry = dtEntry;
  }

  get dtDeparture() {
    return this.props.dtDeparture;
  }
  set dtDeparture(dtDeparture: string | undefined) {
    this.props.dtDeparture = dtDeparture;
  }

  get nrClient() {
    return this.props.nrClient;
  }
  set nrClient(nrClient: string | undefined) {
    this.props.nrClient = nrClient;
  }

  get fiscalNoteEntry() {
    return this.props.fiscalNoteEntry;
  }
  set fiscalNoteEntry(fiscalNoteEntry: string | undefined) {
    this.props.fiscalNoteEntry = fiscalNoteEntry;
  }

  get fiscalNoteDeparture() {
    return this.props.fiscalNoteDeparture;
  }
  set fiscalNoteDeparture(fiscalNoteDeparture: string | undefined) {
    this.props.fiscalNoteDeparture = fiscalNoteDeparture;
  }

  get status() {
    return this.props.status;
  }
  set status(status: StatusProductEnum) {
    this.props.status = status;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.createdAt;
  }
}
