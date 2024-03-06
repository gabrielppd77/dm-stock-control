import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { Supplier } from '@domain/entities/supplier';
import { PrismaSupplierMapper } from '../mappers/prisma-supplier-mapper';
import { PaginationQuery } from '@domain/queries/pagination.query';
import { SupplierPresenter } from '@domain/presenters/supplier.presenter';
import { SimpleSearchQuery } from '@domain/queries/simple-search.query';

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

  async getByQuery(
    query: PaginationQuery<SupplierPresenter>,
  ): Promise<Supplier[]> {
    const { search, field, sort, order, page, size } = query;

    const suppliers = await this.prisma.supplier.findMany({
      skip: page * size,
      take: size,
      where:
        search && field
          ? { [field]: { contains: search, mode: 'insensitive' } }
          : undefined,
      orderBy: sort
        ? {
            [sort]: order,
          }
        : {
            name: 'asc',
          },
    });
    return suppliers.map((d) => PrismaSupplierMapper.toDomain(d));
  }

  async countByQuery(
    query: PaginationQuery<SupplierPresenter>,
  ): Promise<number> {
    const { search, field } = query;
    return await this.prisma.supplier.count({
      where:
        search && field
          ? { [field]: { contains: search, mode: 'insensitive' } }
          : undefined,
    });
  }

  async countProducts(supplierId: string): Promise<number> {
    return await this.prisma.product.count({
      where: {
        supplierId,
      },
    });
  }

  async getByQuerySearch(
    query: SimpleSearchQuery<SupplierPresenter>,
  ): Promise<Supplier[]> {
    const { search, field } = query;
    const suppliers = await this.prisma.supplier.findMany({
      take: 20,
      where: { [field]: { contains: search, mode: 'insensitive' } },
    });
    return suppliers.map((d) => PrismaSupplierMapper.toDomain(d));
  }
}
