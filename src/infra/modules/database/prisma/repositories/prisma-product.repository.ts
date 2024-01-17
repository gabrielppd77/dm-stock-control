import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { ProductRepository } from '@domain/repositories/product.repository';
import { Product } from '@domain/entities/product';
import { PrismaProductMapper } from '../mappers/prisma-product-mapper';

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

  async getAllAvailables(filters: {
    supplierId?: string;
    categoryId?: string;
    dtEntryFilter?: {
      dtInitial: string;
      dtEnd: string;
    };
    dtDepartureFilter?: {
      dtInitial: string;
      dtEnd: string;
    };
    fiscalNoteEntry?: string;
    fiscalNoteDeparture?: string;
  }): Promise<Product[]> {
    const {
      supplierId,
      categoryId,
      dtEntryFilter,
      dtDepartureFilter,
      fiscalNoteEntry,
      fiscalNoteDeparture,
    } = filters;

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
        nrClient: null,
        fiscalNoteEntry: {
          contains: fiscalNoteEntry,
        },
        fiscalNoteDeparture: {
          contains: fiscalNoteDeparture,
        },
      },
    });
    return products.map((d) => PrismaProductMapper.toDomain(d));
  }

  async getAllUnavailables(filters: {
    supplierId?: string;
    categoryId?: string;
    dtEntryFilter?: {
      dtInitial: string;
      dtEnd: string;
    };
    dtDepartureFilter?: {
      dtInitial: string;
      dtEnd: string;
    };
    fiscalNoteEntry?: string;
    fiscalNoteDeparture?: string;
    nrClient?: string;
  }): Promise<Product[]> {
    const {
      supplierId,
      categoryId,
      dtEntryFilter,
      dtDepartureFilter,
      nrClient,
      fiscalNoteEntry,
      fiscalNoteDeparture,
    } = filters;

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
        nrClient: { not: null, contains: nrClient },
        fiscalNoteEntry: {
          contains: fiscalNoteEntry,
        },
        fiscalNoteDeparture: {
          contains: fiscalNoteDeparture,
        },
      },
    });
    return products.map((d) => PrismaProductMapper.toDomain(d));
  }
}
