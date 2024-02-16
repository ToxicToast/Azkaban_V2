import { Optional } from '@azkaban/shared';

export interface CreateTypeDto {
  title: string;
  active?: Optional<boolean>;
}

export interface UpdateTypeDto {
  title?: Optional<string>;
  slug?: Optional<string>;
}
