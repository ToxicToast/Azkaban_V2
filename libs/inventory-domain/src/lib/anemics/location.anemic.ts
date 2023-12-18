import { Anemic, Nullable } from '@azkaban/shared';

export interface LocationAnemic extends Anemic {
  readonly parent_id: Nullable<string>;
  readonly title: string;
  readonly slug: string;
  readonly isFreezer: boolean;
  readonly isParent: boolean;
  readonly isChild: boolean;
}
