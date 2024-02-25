import { Controller, Body, Post } from '@nestjs/common';

import { CategoryCreate } from '@domain/use-cases/category-create';

import { CategoryCreateDTO } from '../../../../domain/dtos/category-create.dto';

@Controller('/categories')
export class CategoryCreateController {
  constructor(private categoryCreate: CategoryCreate) {}

  @Post()
  async handle(@Body() body: CategoryCreateDTO) {
    await this.categoryCreate.execute(body);
  }
}
