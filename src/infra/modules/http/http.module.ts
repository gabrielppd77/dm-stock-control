import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierCreateController } from './controllers/supplier-create.controller';
import { SupplierUpdateController } from './controllers/supplier-update.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';

@Module({
  imports: [DatabaseModule],
  controllers: [SupplierCreateController, SupplierUpdateController],
  providers: [SupplierCreate, SupplierUpdate],
})
export class HttpModule {}
