import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierCreateController } from './controllers/supplier-create.controller';
import { SupplierUpdateController } from './controllers/supplier-update.controller';
import { SupplierRemoveController } from './controllers/supplier-remove.controller';
import { SupplierListController } from './controllers/supplier-list.controller';

import { CategoryCreateController } from './controllers/category-create.controller';
import { CategoryUpdateController } from './controllers/category-update.controller';
import { CategoryRemoveController } from './controllers/category-remove.controller';
import { CategoryListController } from './controllers/category-list.controller';

import { ProductCreateController } from './controllers/product-create.controller';
import { ProductUpdateController } from './controllers/product-update.controller';
import { ProductRemoveController } from './controllers/product-remove.controller';
import { ProductListAvailablesController } from './controllers/product-list-availables.controller';
import { ProductListUnavailablesController } from './controllers/product-list-unavailables.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';
import { SupplierList } from '@domain/use-cases/supplier-list';

import { CategoryCreate } from '@domain/use-cases/category-create';
import { CategoryUpdate } from '@domain/use-cases/category-update';
import { CategoryRemove } from '@domain/use-cases/category-remove';
import { CategoryList } from '@domain/use-cases/category-list';

import { ProductCreate } from '@domain/use-cases/product-create';
import { ProductUpdate } from '@domain/use-cases/product-update';
import { ProductRemove } from '@domain/use-cases/product-remove';
import { ProductListAvailables } from '@domain/use-cases/product-list-availables';
import { ProductListUnavailables } from '@domain/use-cases/product-list-unavailables';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SupplierCreateController,
    SupplierUpdateController,
    SupplierRemoveController,
    SupplierListController,

    CategoryCreateController,
    CategoryUpdateController,
    CategoryRemoveController,
    CategoryListController,

    ProductCreateController,
    ProductUpdateController,
    ProductRemoveController,
    ProductListAvailablesController,
    ProductListUnavailablesController,
  ],
  providers: [
    SupplierCreate,
    SupplierUpdate,
    SupplierRemove,
    SupplierList,

    CategoryCreate,
    CategoryUpdate,
    CategoryRemove,
    CategoryList,

    ProductCreate,
    ProductUpdate,
    ProductRemove,
    ProductListAvailables,
    ProductListUnavailables,
  ],
})
export class HttpModule {}
