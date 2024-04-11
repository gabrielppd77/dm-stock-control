import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierController } from './controllers/supplier.controller';
import { CategoryController } from './controllers/category.controller';

// import { ProductCreateController } from './controllers/product-create.controller';
// import { ProductUpdateController } from './controllers/product-update.controller';
// import { ProductRemoveController } from './controllers/product-remove.controller';
// import { ProductListController } from './controllers/product-list.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';
import { SupplierListByQuery } from '@domain/use-cases/supplier-list-by-query';
import { SupplierGetBySearchField } from '@domain/use-cases/supplier-get-by-search-field';

import { CategoryCreate } from '@domain/use-cases/category-create';
import { CategoryUpdate } from '@domain/use-cases/category-update';
import { CategoryRemove } from '@domain/use-cases/category-remove';
import { CategoryListByQuery } from '@domain/use-cases/category-list-by-query';
import { CategoryGetBySearchField } from '@domain/use-cases/category-get-by-search-field';

// import { ProductCreate } from '@domain/use-cases/product-create';
// import { ProductUpdate } from '@domain/use-cases/product-update';
// import { ProductRemove } from '@domain/use-cases/product-remove';
// import { ProductList } from '@domain/use-cases/product-list';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SupplierController,
    CategoryController,
    // ProductCreateController,
    // ProductUpdateController,
    // ProductRemoveController,
    // ProductListController,
  ],
  providers: [
    SupplierCreate,
    SupplierUpdate,
    SupplierRemove,
    SupplierListByQuery,
    SupplierGetBySearchField,
    CategoryCreate,
    CategoryUpdate,
    CategoryRemove,
    CategoryListByQuery,
    CategoryGetBySearchField,
    // ProductCreate,
    // ProductUpdate,
    // ProductRemove,
    // ProductList,
  ],
})
export class HttpModule {}
