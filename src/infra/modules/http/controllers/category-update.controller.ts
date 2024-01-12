import { Controller, Body, Put, Param } from '@nestjs/common';

import { CategoryUpdate } from '@domain/use-cases/category-update';

import { CategoryUpdateDTO } from '../dtos/category-update.dto';

@Controller('/categories')
export class CategoryUpdateController {
  constructor(private categoryUpdate: CategoryUpdate) {}

  @Put(':id')
  async handle(
    @Body() body: CategoryUpdateDTO,
    @Param('id') categoryId: string,
  ) {
    const { name } = body;

    await this.categoryUpdate.execute({
      categoryId,
      fields: { name },
    });
  }
}
