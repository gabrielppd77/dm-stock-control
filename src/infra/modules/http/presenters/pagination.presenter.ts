export class PageOptionsPresenter {
  readonly length: number;
  readonly size: number;
  readonly lastPage: number;
  readonly page: number;

  constructor(total: number, size: number, page: number) {
    this.length = total;
    this.size = size;
    this.lastPage = Math.ceil(total / size) - 1;
    this.page = page;
  }
}

export class PaginationPresenter<DataType> {
  readonly data: DataType;
  readonly pagination: PageOptionsPresenter;

  constructor(data: DataType, total: number, size: number, page: number) {
    this.data = data;
    this.pagination = new PageOptionsPresenter(total, size, page);
  }
}
