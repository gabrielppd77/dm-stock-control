import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../../../user-manager-api-again/src/infra/modules/database/prisma/prisma.service';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { Supplier } from '@domain/entities/supplier';
import { PrismaSupplierMapper } from '../mappers/prisma-supplier-mapper';

@Injectable()
export class PrismaSupplierRepository implements SupplierRepository {
  constructor(private prisma: PrismaService) {}

  async create(supplier: Supplier): Promise<void> {
    const supplierToPrisma = PrismaSupplierMapper.toPrisma(supplier);
    await this.prisma.supplier.create({ data: supplierToPrisma });
  }
}
