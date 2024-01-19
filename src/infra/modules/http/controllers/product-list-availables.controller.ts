import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';

import { ProductListAvailables } from '@domain/use-cases/product-list-availables';

import { ProductAvailablesPresenter } from '../presenters/product-availables.presenter';
import { ProductListAvailablesQuery } from '../queries/product-list-availables.query';

import { ExcelGenerator } from '@core/helpers/excel-generator';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/products/availables')
export class ProductListAvailablesController {
  constructor(private productListAvailables: ProductListAvailables) {}

  @Get()
  async handle(
    @Query() queries: ProductListAvailablesQuery,
  ): Promise<ProductAvailablesPresenter[]> {
    const { products } = await this.productListAvailables.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductAvailablesPresenter>(
      (d) => new ProductAvailablesPresenter(d),
    );

    return productsFormated;
  }

  @ApiResponse({
    status: 200,
    description: 'Return excel file',
    content: {
      'buffer/file.xlsx': {},
    },
  })
  @Get('file')
  async handleFile(
    @Res() res: Response,
    @Query() queries: ProductListAvailablesQuery,
  ): Promise<Response<any, Record<string, any>>> {
    const { products } = await this.productListAvailables.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductAvailablesPresenter>(
      (d) => new ProductAvailablesPresenter(d),
    );

    const titleFile = 'produtos-disponiveis';

    const excelGenerator = new ExcelGenerator({
      sheetTitle: titleFile,
      columns: [
        { header: 'Fornecedor', key: 'supplierName', width: 20 },
        { header: 'Categoria', key: 'categoryName', width: 20 },
        { header: 'Nome', key: 'name', width: 20 },
        { header: 'Cor', key: 'color', width: 20 },
        { header: 'Tecido', key: 'fabric', width: 20 },
        { header: 'Medida', key: 'measure', width: 20 },
        { header: 'Data Entrada', key: 'dtEntry', width: 20 },
        { header: 'Data Saída', key: 'dtDeparture', width: 20 },
        { header: 'NF Entrada', key: 'fiscalNoteEntry', width: 20 },
        { header: 'NF Saída', key: 'fiscalNoteDeparture', width: 20 },
        { header: 'Status', key: 'statusName', width: 20 },
      ],
      data: productsFormated,
    });

    const buffer = await excelGenerator.writeBuffer();

    return res
      .set('Content-Disposition', `attachment; filename=${titleFile}.xlsx`)
      .send(buffer);
  }
}
