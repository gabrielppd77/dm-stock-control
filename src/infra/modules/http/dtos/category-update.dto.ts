import { IsString } from 'class-validator';

export class CategoryUpdateDTO {
  @IsString()
  name: string;
}
