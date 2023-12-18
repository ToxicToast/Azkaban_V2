import { Optional } from '@azkaban/shared';

export interface CreateSizeDto {
  title: string;
  active?: Optional<boolean>;
}
