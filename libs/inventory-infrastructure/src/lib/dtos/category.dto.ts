import { Optional } from '@azkaban/shared';

export interface CreateCategoryDto {
  parent_id?: Optional<string>;
  title: string;
  active?: Optional<boolean>;
}
