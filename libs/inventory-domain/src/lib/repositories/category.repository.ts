import { Chainable, Nullable, Repository } from '@azkaban/shared';
import { CategoryAnemic } from '../anemics';

interface CategoryAdditions {
  findByTitle(title: string): Promise<Nullable<CategoryAnemic>>;
  findByParentId(parent_id: Nullable<string>): Promise<Array<CategoryAnemic>>;
}

export type CategoryRepository = Chainable<
  Repository<CategoryAnemic>,
  CategoryAdditions
>;
