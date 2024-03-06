import { IsString } from 'class-validator';

export class SimpleSearchQuery<DataType> {
  @IsString()
  search: string;

  @IsString()
  field: keyof DataType;
}
