import { Optional } from '@azkaban/shared';

export interface CreateCategoryDto {
  parent_id?: Optional<string>;
  title: string;
  active?: Optional<boolean>;
}

export interface UpdateCategoryDto {
  parent_id?: Optional<string>;
  title?: Optional<string>;
  slug?: Optional<string>;
}
