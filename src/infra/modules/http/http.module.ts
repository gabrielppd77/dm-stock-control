import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierCreateController } from './controllers/supplier-create.controller';
import { SupplierUpdateController } from './controllers/supplier-update.controller';
import { SupplierRemoveController } from './controllers/supplier-remove.controller';
import { SupplierListController } from './controllers/supplier-list.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';
import { SupplierList } from '@domain/use-cases/supplier-list';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SupplierCreateController,
    SupplierUpdateController,
    SupplierRemoveController,
    SupplierListController,
  ],
  providers: [SupplierCreate, SupplierUpdate, SupplierRemove, SupplierList],
})
export class HttpModule {}
