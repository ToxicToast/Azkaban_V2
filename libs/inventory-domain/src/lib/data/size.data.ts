import { Optional } from '@azkaban/shared';

export interface SizeData {
  readonly title: string;
  readonly active?: Optional<boolean>;
}
