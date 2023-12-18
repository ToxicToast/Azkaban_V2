import { Nullable, Optional } from '@azkaban/shared';

export interface CategoryData {
  readonly parent_id?: Optional<Nullable<string>>;
  readonly title: string;
  readonly active?: Optional<boolean>;
}
