import { Optional } from '@azkaban/shared';

export interface TypeData {
  readonly title: string;
  readonly active?: Optional<boolean>;
}
