import { Controller, Body, Post } from '@nestjs/common';

import { CategoryCreate } from '@domain/use-cases/category-create';

import { CategoryCreateDTO } from '../dtos/category-create.dto';

@Controller('/categories')
export class CategoryCreateController {
  constructor(private categoryCreate: CategoryCreate) {}

  @Post()
  async handle(@Body() body: CategoryCreateDTO) {
    const { name } = body;

    await this.categoryCreate.execute({
      name,
    });
  }
}
