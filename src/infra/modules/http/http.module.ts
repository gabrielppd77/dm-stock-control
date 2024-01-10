import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierCreateController } from './controllers/supplier-create.controller';
import { SupplierUpdateController } from './controllers/supplier-update.controller';
import { SupplierRemoveController } from './controllers/supplier-remove.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SupplierCreateController,
    SupplierUpdateController,
    SupplierRemoveController,
  ],
  providers: [SupplierCreate, SupplierUpdate, SupplierRemove],
})
export class HttpModule {}
