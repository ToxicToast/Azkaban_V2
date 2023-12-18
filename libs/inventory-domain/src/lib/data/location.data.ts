import { Optional } from '@azkaban/shared';

export interface LocationData {
  readonly title: string;
  readonly parent_id?: Optional<string>;
  readonly freezer?: Optional<boolean>;
  readonly active?: Optional<boolean>;
}
