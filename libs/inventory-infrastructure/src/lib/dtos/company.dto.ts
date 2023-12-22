import { Optional } from '@azkaban/shared';

export interface CreateCompanyDto {
  title: string;
  active?: Optional<boolean>;
}

export interface UpdateCompanyDto {
  title?: Optional<string>;
  slug?: Optional<string>;
}
