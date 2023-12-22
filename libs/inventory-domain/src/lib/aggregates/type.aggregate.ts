import { AggregateHelper, Domain, Nullable } from '@azkaban/shared';
import { TypeAnemic } from '../anemics';

interface TypeAggregateHelper {
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class TypeAggregate
  extends AggregateHelper<TypeAggregateHelper>
  implements Domain<TypeAnemic>
{
  constructor(
    private readonly id: string,
    private title: string,
    private slug: string,
    private active: boolean,
    private readonly created_at: Date,
    private updated_at: Date,
    private deleted_at: Date
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

  toAnemic(): TypeAnemic {
    return {
      id: this.id,
      title: this.getTitle(),
      slug: this.getSlug(),
      active: this.getActive(),
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      deleted_at: this.getDeletedAt(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
    };
  }
}
