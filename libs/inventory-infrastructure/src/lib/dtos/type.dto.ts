import { Optional } from '@azkaban/shared';

export interface CreateTypeDto {
  title: string;
  active?: Optional<boolean>;
}
