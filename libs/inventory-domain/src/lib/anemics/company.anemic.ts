import { Anemic } from '@azkaban/shared';

export interface CompanyAnemic extends Anemic {
  readonly title: string;
  readonly slug: string;
}
