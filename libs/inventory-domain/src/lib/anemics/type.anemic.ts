import { Anemic } from '@azkaban/shared';

export interface TypeAnemic extends Anemic {
  readonly title: string;
  readonly slug: string;
}
