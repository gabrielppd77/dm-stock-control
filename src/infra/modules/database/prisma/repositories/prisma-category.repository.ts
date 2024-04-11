import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/modules/database/prisma/prisma.service';

import { CategoryRepository } from '@domain/repositories/category.repository';

import { Category } from '@domain/entities/category';

import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';

import { PaginationQuery } from '@core/queries/pagination.query';
import { SearchFieldQuery } from '@core/queries/search-field.query';

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

  async countProducts(categoryId: string): Promise<number> {
    return await this.prisma.product.count({
      where: {
        categoryId,
      },
    });
  }

  async remove(categoryId: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }

  async getByQuery(query: PaginationQuery): Promise<Category[]> {
    const { search, field, sort, order, page, size } = query;
    const categories = await this.prisma.category.findMany({
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
    return categories.map((d) => PrismaCategoryMapper.toDomain(d));
  }

  async countByQuery(query: PaginationQuery): Promise<number> {
    const { search, field } = query;
    return await this.prisma.category.count({
      where:
        search && field
          ? { [field]: { contains: search, mode: 'insensitive' } }
          : undefined,
    });
  }

  async getBySearchField({
    search,
    field,
  }: SearchFieldQuery): Promise<Category[]> {
    const categories = await this.prisma.category.findMany({
      take: 20,
      where: { [field]: { contains: search, mode: 'insensitive' } },
    });
    return categories.map((d) => PrismaCategoryMapper.toDomain(d));
  }
}
