import { AggregateHelper, Domain, Nullable } from '@azkaban/shared';
import { SizeAnemic } from '../anemics';

interface SizeAggregateHelper {
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class SizeAggregate
  extends AggregateHelper<SizeAggregateHelper>
  implements Domain<SizeAnemic>
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

  toAnemic(): SizeAnemic {
    return {
      id: this.id,
      title: this.getTitle(),
      slug: this.getSlug(),
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      deleted_at: this.getDeletedAt(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
    };
  }
}
