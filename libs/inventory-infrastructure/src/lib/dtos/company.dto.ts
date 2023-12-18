import { Optional } from '@azkaban/shared';

export interface CreateCompanyDto {
  title: string;
  active?: Optional<boolean>;
}
