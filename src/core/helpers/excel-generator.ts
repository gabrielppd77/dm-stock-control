import { Workbook, Column } from 'exceljs';

interface DataColum<DataType> extends Omit<Partial<Column>, 'header' | 'key'> {
  header: string;
  key: keyof DataType extends string ? keyof DataType : never;
}

interface ExcelGeneratorProps<DataType> {
  sheetTitle: string;
  columns: DataColum<DataType>[];
  data: DataType[];
}

export class ExcelGenerator<DataType> {
  private workbook: Workbook;

  constructor(props: ExcelGeneratorProps<DataType>) {
    const { sheetTitle, columns, data } = props;

    this.workbook = new Workbook();

    const worksheet = this.workbook.addWorksheet(sheetTitle);
    worksheet.columns = columns;
    data.forEach((d) => worksheet.addRow(d));
  }

  async writeBuffer() {
    return await this.workbook.xlsx.writeBuffer();
  }
}
