import { Optional } from '@azkaban/shared';

export interface CreateLocationDto {
  parent_id?: Optional<string>;
  title: string;
  active?: Optional<boolean>;
  freezer?: Optional<boolean>;
}
