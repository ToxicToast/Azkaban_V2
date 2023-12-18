import { Chainable, Nullable, Repository } from '@azkaban/shared';
import { CompanyAnemic } from '../anemics';

interface CompanyAdditions {
  findByTitle(title: string): Promise<Nullable<CompanyAnemic>>;
  findBySlug(slug: string): Promise<Nullable<CompanyAnemic>>;
}

export type CompanyRepository = Chainable<
  Repository<CompanyAnemic>,
  CompanyAdditions
>;
