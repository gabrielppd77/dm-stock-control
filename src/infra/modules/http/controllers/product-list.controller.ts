import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

import { ProductList } from '@domain/use-cases/product-list';
import { ExcelGenerator } from '@core/helpers/excel-generator';

import { ProductPresenter } from '../presenters/product.presenter';
import { ProductListQuery } from '../queries/product-list.query';

@Controller('/products')
export class ProductListController {
  constructor(private productList: ProductList) {}

  @Get()
  async handle(
    @Query() queries: ProductListQuery,
  ): Promise<ProductPresenter[]> {
    const { products } = await this.productList.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductPresenter>(
      (d) => new ProductPresenter(d),
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
    @Query() queries: ProductListQuery,
  ): Promise<Response<any, Record<string, any>>> {
    const { products } = await this.productList.execute({
      filters: queries,
    });

    const productsFormated = products.map<ProductPresenter>(
      (d) => new ProductPresenter(d),
    );

    const titleFile = 'produtos';

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
        { header: 'Número Cliente', key: 'nrClient', width: 20 },
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
