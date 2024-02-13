import { Optional } from '@azkaban/shared';

export interface CreateSizeDto {
  title: string;
  active?: Optional<boolean>;
}

export interface UpdateSizeDto {
  title?: Optional<string>;
  slug?: Optional<string>;
  active?: Optional<boolean>;
}
