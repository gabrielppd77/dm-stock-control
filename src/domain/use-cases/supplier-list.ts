import { Injectable } from '@nestjs/common';

import { SupplierRepository } from '@domain/repositories/supplier.repository';
import { Supplier } from '@domain/entities/supplier';

interface Request {
  page: number;
  size: number;
  order: 'asc' | 'desc';
  sort?: keyof Supplier;
  search?: string;
  field?: keyof Supplier;
}

interface Response {
  data: Supplier[];
  total: number;
}

@Injectable()
export class SupplierList {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute(req: Request): Promise<Response> {
    const { page, size, sort, order, search, field } = req;
    const { data, total } = await this.supplierRepository.getAll(
      page,
      size,
      order,
      sort,
      search,
      field,
    );
    return { data, total };
  }
}
