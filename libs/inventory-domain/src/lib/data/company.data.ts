import { Optional } from '@azkaban/shared';

export interface CompanyData {
  readonly title: string;
  readonly active?: Optional<boolean>;
}
