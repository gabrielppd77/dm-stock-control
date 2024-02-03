import { PageOptionsPresenter } from './page-options.presenter';

export class PaginationPresenter<DataType> {
  readonly data: DataType;
  readonly pagination: PageOptionsPresenter;

  constructor(data: DataType, total: number, size: number, page: number) {
    this.data = data;
    this.pagination = new PageOptionsPresenter(total, size, page);
  }
}
