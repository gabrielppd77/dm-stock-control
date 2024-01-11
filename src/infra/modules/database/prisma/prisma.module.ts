import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { CategoryRepository } from '@domain/repositories/category.repository';

import { PrismaSupplierRepository } from './repositories/prisma-supplier.repository';
import { PrismaCategoryRepository } from './repositories/prisma-category.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: SupplierRepository,
      useClass: PrismaSupplierRepository,
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
  exports: [SupplierRepository, CategoryRepository],
})
export class PrismaModule {}
