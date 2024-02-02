import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { CategoryRepository } from '@domain/repositories/category.repository';
import { Category } from '@domain/entities/category';
import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(category: Category): Promise<void> {
    const categoryPrisma = PrismaCategoryMapper.toPrisma(category);
    await this.prisma.category.create({ data: categoryPrisma });
  }

  async getById(id: string): Promise<Category | null> {
    const categoryPrisma = await this.prisma.category.findFirst({
      where: {
        id,
      },
    });

    if (!categoryPrisma) {
      return null;
    }

    return PrismaCategoryMapper.toDomain(categoryPrisma);
  }

  async update(categoryId: string, categoryUpdated: Category): Promise<void> {
    const categoryPrisma = PrismaCategoryMapper.toPrisma(categoryUpdated);
    await this.prisma.category.update({
      where: {
        id: categoryId,
      },
      data: categoryPrisma,
    });
  }

  async remove(categoryId: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }

  async getAll(): Promise<Category[]> {
    // const page = 0;
    // const size = 10;
    // const sort: keyof Category = 'name';
    // const order: 'asc' | 'desc' = 'asc';
    // const search = 'guarda';

    // const categories = await this.prisma.category.findMany({
    //   skip: page * size,
    //   take: size,
    //   where: { name: { contains: search, mode: 'insensitive' } },
    //   orderBy: {
    //     [sort]: order,
    //   },
    // });
    const categories = await this.prisma.category.findMany();
    return categories.map((d) => PrismaCategoryMapper.toDomain(d));
  }

  async countProducts(categoryId: string): Promise<number> {
    return await this.prisma.product.count({
      where: {
        categoryId,
      },
    });
  }
}
