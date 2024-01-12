import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { ProductRepository } from '@domain/repositories/product.repository';
import { Product } from '@domain/entities/product';
import { PrismaProductMapper } from '../mappers/prisma-product-mapper';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    const productPrisma = PrismaProductMapper.toPrisma(product);
    await this.prisma.product.create({ data: productPrisma });
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

  async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map((d) => PrismaProductMapper.toDomain(d));
  }
}
