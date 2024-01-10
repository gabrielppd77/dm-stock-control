import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierCreateController } from './controllers/supplier-create.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';

@Module({
  imports: [DatabaseModule],
  controllers: [SupplierCreateController],
  providers: [SupplierCreate],
})
export class HttpModule {}
