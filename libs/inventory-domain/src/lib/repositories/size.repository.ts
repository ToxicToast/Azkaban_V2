import { Chainable, Nullable, Repository } from '@azkaban/shared';
import { SizeAnemic } from '../anemics';

interface SizeAdditions {
  findByTitle(title: string): Promise<Nullable<SizeAnemic>>;
  findBySlug(slug: string): Promise<Nullable<SizeAnemic>>;
}

export type SizeRepository = Chainable<Repository<SizeAnemic>, SizeAdditions>;
