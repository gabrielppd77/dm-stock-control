import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { PrismaSupplierRepository } from './repositories/prisma-supplier.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: SupplierRepository,
      useClass: PrismaSupplierRepository,
    },
  ],
  exports: [SupplierRepository],
})
export class PrismaModule {}
