import {
  Factory,
  FactoryConstituteHelper,
  SlugHelper,
  UuidHelper,
} from '@azkaban/shared';
import { CompanyAnemic } from '../anemics';
import { CompanyData } from '../data';
import { CompanyAggregate } from '../aggregates';

export class CompanyFactory
  extends FactoryConstituteHelper<CompanyAnemic>
  implements Factory<CompanyAnemic, CompanyAggregate, CompanyData>
{
  reconstitute(anemic: CompanyAnemic): CompanyAggregate {
    return new CompanyAggregate(
      anemic.id,
      anemic.title,
      anemic.slug,
      anemic.isActive,
      anemic.created_at,
      anemic.updated_at,
      anemic.deleted_at
    );
  }

  createFactory(data: CompanyData): CompanyAggregate {
    const id = UuidHelper.create().value;
    const slug = SlugHelper.create(data.title).value;
    return new CompanyAggregate(
      id,
      data.title,
      slug,
      data.active ?? false,
      new Date(),
      null,
      null
    );
  }
}
