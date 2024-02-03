export class PageOptionsPresenter {
  readonly length: number;
  readonly size: number;
  readonly lastPage: number;
  readonly page: number;
  readonly startIndex: number;
  readonly endIndex: number;

  constructor(total: number, size: number, page: number) {
    this.length = total;
    this.size = size;
    this.lastPage = Math.ceil(total / size) - 1;
    this.page = page;
    this.startIndex = page * size;
    this.endIndex = page * size + (size - 1);
  }
}
