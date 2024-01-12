import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { CategoryRepository } from '@domain/repositories/category.repository';
import { ProductRepository } from '@domain/repositories/product.repository';

import { PrismaSupplierRepository } from './repositories/prisma-supplier.repository';
import { PrismaCategoryRepository } from './repositories/prisma-category.repository';
import { PrismaProductRepository } from './repositories/prisma-product.repository';

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
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [SupplierRepository, CategoryRepository, ProductRepository],
})
export class PrismaModule {}
