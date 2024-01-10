import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { Supplier } from '@domain/entities/supplier';
import { PrismaSupplierMapper } from '../mappers/prisma-supplier-mapper';

@Injectable()
export class PrismaSupplierRepository implements SupplierRepository {
  constructor(private prisma: PrismaService) {}

  async create(supplier: Supplier): Promise<void> {
    const supplierPrisma = PrismaSupplierMapper.toPrisma(supplier);
    await this.prisma.supplier.create({ data: supplierPrisma });
  }

  async getById(id: string): Promise<Supplier | null> {
    const supplierPrisma = await this.prisma.supplier.findFirst({
      where: {
        id,
      },
    });

    if (!supplierPrisma) {
      return null;
    }

    return PrismaSupplierMapper.toDomain(supplierPrisma);
  }

  async update(supplierId: string, supplierUpdated: Supplier): Promise<void> {
    const supplierPrisma = PrismaSupplierMapper.toPrisma(supplierUpdated);
    await this.prisma.supplier.update({
      where: {
        id: supplierId,
      },
      data: supplierPrisma,
    });
  }

  async remove(supplierId: string): Promise<void> {
    await this.prisma.supplier.delete({
      where: {
        id: supplierId,
      },
    });
  }

  async getAll(): Promise<Supplier[]> {
    const suppliers = await this.prisma.supplier.findMany();
    return suppliers.map((d) => PrismaSupplierMapper.toDomain(d));
  }
}
