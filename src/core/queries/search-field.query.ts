import { IsString } from 'class-validator';

export class SearchFieldQuery {
  @IsString()
  search: string;
  @IsString()
  field: string;
}
