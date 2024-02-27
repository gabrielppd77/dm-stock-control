export class PageOptionsPresenter {
  readonly length: number;
  readonly size: number;
  readonly lastPage: number;
  readonly page: number;
  readonly startIndex: number;
  readonly endIndex: number;

  constructor(total: number, size: number, page: number) {
    const auxEndIndex = page * size + (size - 1);

    this.length = total;
    this.size = size;
    this.lastPage = total > 0 ? Math.ceil(total / size) - 1 : total;
    this.page = page;
    this.startIndex = page * size;
    this.endIndex =
      total > 0 ? (auxEndIndex >= total ? total - 1 : auxEndIndex) : total;
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
