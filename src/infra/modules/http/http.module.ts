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

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';
import { SupplierList } from '@domain/use-cases/supplier-list';

import { CategoryCreate } from '@domain/use-cases/category-create';
import { CategoryUpdate } from '@domain/use-cases/category-update';
import { CategoryRemove } from '@domain/use-cases/category-remove';
import { CategoryList } from '@domain/use-cases/category-list';

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
  ],
})
export class HttpModule {}
