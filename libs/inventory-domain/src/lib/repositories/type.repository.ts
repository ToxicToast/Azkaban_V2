import { Chainable, Nullable, Repository } from '@azkaban/shared';
import { TypeAnemic } from '../anemics';

interface TypeAdditions {
  findByTitle(title: string): Promise<Nullable<TypeAnemic>>;
  findBySlug(slug: string): Promise<Nullable<TypeAnemic>>;
}

export type TypeRepository = Chainable<Repository<TypeAnemic>, TypeAdditions>;
