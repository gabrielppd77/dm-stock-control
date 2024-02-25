import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { ProductRepository } from '@domain/repositories/product.repository';
import { Product } from '@domain/entities/product';
import { PrismaProductMapper } from '../mappers/prisma-product-mapper';
import { ProductListQuery } from '@domain/queries/product-list.query';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async createMany(products: Product[]): Promise<void> {
    const productsPrisma = products.map(PrismaProductMapper.toPrisma);
    await this.prisma.product.createMany({ data: productsPrisma });
  }

  async getById(id: string): Promise<Product | null> {
    const productPrisma = await this.prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!productPrisma) {
      return null;
    }

    return PrismaProductMapper.toDomain(productPrisma);
  }

  async update(productId: string, productUpdated: Product): Promise<void> {
    const productPrisma = PrismaProductMapper.toPrisma(productUpdated);
    await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: productPrisma,
    });
  }

  async remove(productId: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }

  async getByQuery(query: ProductListQuery): Promise<Product[]> {
    const {
      supplierId,
      categoryId,
      dtEntryInitial,
      dtEntryEnd,
      dtDepartureInitial,
      dtDepartureEnd,
      onlyUnavaibles,
    } = query;

    const dtEntryFilter =
      dtEntryInitial && dtEntryEnd
        ? { dtInitial: dtEntryInitial, dtEnd: dtEntryEnd }
        : undefined;
    const dtDepartureFilter =
      dtDepartureInitial && dtDepartureEnd
        ? { dtInitial: dtDepartureInitial, dtEnd: dtDepartureEnd }
        : undefined;

    let nrClient: { not?: null; contains?: string } | null = null;

    if (onlyUnavaibles) {
      nrClient = { not: null };
    }

    if (nrClientQuery) {
      nrClient = { contains: nrClientQuery };
    }

    const products = await this.prisma.product.findMany({
      where: {
        supplierId,
        categoryId,
        dtEntry: dtEntryFilter
          ? {
              gte: new Date(dtEntryFilter.dtInitial),
              lte: new Date(dtEntryFilter.dtEnd),
            }
          : undefined,
        dtDeparture: dtDepartureFilter
          ? {
              gte: new Date(dtDepartureFilter.dtInitial),
              lte: new Date(dtDepartureFilter.dtEnd),
            }
          : undefined,
        nrClient,
      },
      include: {
        supplier: true,
        category: true,
      },
    });
    return products.map((d) => PrismaProductMapper.toDomainWithIncludes(d));
  }
}
