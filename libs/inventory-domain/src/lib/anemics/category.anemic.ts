import { Anemic, Nullable } from '@azkaban/shared';

export interface CategoryAnemic extends Anemic {
  readonly parent_id: Nullable<string>;
  readonly title: string;
  readonly slug: string;
  readonly isParent: boolean;
  readonly isChild: boolean;
}
