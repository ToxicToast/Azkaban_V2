import { Nullable, Optional } from '@azkaban/shared';

export interface CreateLocationDto {
  parent_id?: Optional<Nullable<string>>;
  title: string;
  active?: Optional<boolean>;
  freezer?: Optional<boolean>;
}

export interface UpdateLocationDto {
  title?: Optional<string>;
  slug?: Optional<string>;
  parent_id?: Optional<Nullable<string>>;
  freezer?: Optional<boolean>;
}
