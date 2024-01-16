import { UniqueEntityID } from '@core/common/entities/unique-entity-id';
import { Product } from '@domain/entities/product';
import { Product as ProductPrisma } from '@prisma/client';

export class PrismaProductMapper {
  static toPrisma(product: Product): ProductPrisma {
    return {
      id: product.id.toValue(),
      supplierId: product.supplierId.toValue(),
      categoryId: product.categoryId.toValue(),
      name: product.name,
      color: product.color || null,
      fabric: product.fabric || null,
      measure: product.measure || null,
      dtEntry: product.dtEntry ? new Date(product.dtEntry) : null,
      dtDeparture: product.dtDeparture ? new Date(product.dtDeparture) : null,
      nrClient: product.nrClient || null,
      fiscalNoteEntry: product.fiscalNoteEntry || null,
      fiscalNoteDeparture: product.fiscalNoteDeparture || null,
      status: product.status,
    };
  }
  static toDomain(productPrisma: ProductPrisma): Product {
    return new Product(
      {
        supplierId: new UniqueEntityID(productPrisma.supplierId),
        categoryId: new UniqueEntityID(productPrisma.categoryId),
        name: productPrisma.name,
        color: productPrisma.color || undefined,
        fabric: productPrisma.fabric || undefined,
        measure: productPrisma.measure || undefined,
        dtEntry: productPrisma.dtEntry?.toISOString() || undefined,
        dtDeparture: productPrisma.dtDeparture?.toISOString() || undefined,
        nrClient: productPrisma.nrClient || undefined,
        fiscalNoteEntry: productPrisma.fiscalNoteEntry || undefined,
        fiscalNoteDeparture: productPrisma.fiscalNoteDeparture || undefined,
        status: productPrisma.status,
      },
      productPrisma.id,
    );
  }
}
