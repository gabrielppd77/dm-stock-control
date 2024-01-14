import { Supplier } from '@domain/entities/supplier';
import { Supplier as SupplierPrisma } from '@prisma/client';

export class PrismaSupplierMapper {
  static toPrisma(supplier: Supplier): SupplierPrisma {
    return {
      id: supplier.id.toValue(),
      name: supplier.name,
      createdAt: new Date(supplier.createdAt),
      updatedAt: new Date(supplier.updatedAt),
    };
  }
  static toDomain(supplierPrisma: SupplierPrisma): Supplier {
    return new Supplier(
      {
        name: supplierPrisma.name,
        createdAt: supplierPrisma.createdAt?.toISOString() || undefined,
        updatedAt: supplierPrisma.updatedAt?.toISOString() || undefined,
      },
      supplierPrisma.id,
    );
  }
}
