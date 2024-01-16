import { Supplier } from '@domain/entities/supplier';
import { Supplier as SupplierPrisma } from '@prisma/client';

export class PrismaSupplierMapper {
  static toPrisma(supplier: Supplier): SupplierPrisma {
    return {
      id: supplier.id.toValue(),
      name: supplier.name,
    };
  }
  static toDomain(supplierPrisma: SupplierPrisma): Supplier {
    return new Supplier(
      {
        name: supplierPrisma.name,
      },
      supplierPrisma.id,
    );
  }
}
