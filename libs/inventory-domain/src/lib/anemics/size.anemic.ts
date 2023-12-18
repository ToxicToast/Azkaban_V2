import { Anemic } from '@azkaban/shared';

export interface SizeAnemic extends Anemic {
  readonly title: string;
  readonly slug: string;
  readonly active: boolean;
}
