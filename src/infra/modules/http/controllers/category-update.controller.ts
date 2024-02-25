import { Controller, Body, Put, Param } from '@nestjs/common';

import { CategoryUpdate } from '@domain/use-cases/category-update';

import { CategoryUpdateDTO } from '../../../../domain/dtos/category-update.dto';

@Controller('/categories')
export class CategoryUpdateController {
  constructor(private categoryUpdate: CategoryUpdate) {}

  @Put(':id')
  async handle(@Body() body: CategoryUpdateDTO, @Param('id') id: string) {
    await this.categoryUpdate.execute({
      id,
      data: body,
    });
  }
}
