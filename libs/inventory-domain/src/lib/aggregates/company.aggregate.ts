import { AggregateHelper, Domain, Nullable } from '@azkaban/shared';
import { CompanyAnemic } from '../anemics';

interface CompanyAggregateHelper {
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class CompanyAggregate
  extends AggregateHelper<CompanyAggregateHelper>
  implements Domain<CompanyAnemic>
{
  constructor(
    private readonly id: string,
    private title: string,
    private slug: string,
    private active: boolean,
    private readonly created_at: Date,
    private updated_at: Nullable<Date>,
    private deleted_at: Nullable<Date>
  ) {
    super({
      created_at,
      updated_at,
      deleted_at,
      active,
      title,
      slug,
    });
  }

  toAnemic(): CompanyAnemic {
    return {
      id: this.id,
      title: this.getTitle(),
      slug: this.getSlug(),
      active: this.isActive(),
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      deleted_at: this.getDeletedAt(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
    };
  }
}
