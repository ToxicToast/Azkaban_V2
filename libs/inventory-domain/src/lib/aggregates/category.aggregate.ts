import { AggregateHelper, Domain, Nullable } from '@azkaban/shared';
import { CategoryAnemic } from '../anemics';

interface CategoryAggregateHelper {
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class CategoryAggregate
  extends AggregateHelper<CategoryAggregateHelper>
  implements Domain<CategoryAnemic>
{
  constructor(
    private readonly id: string,
    private parent_id: Nullable<string>,
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

  isParent(): boolean {
    return this.parent_id === null;
  }

  isChild(): boolean {
    return this.parent_id !== null;
  }

  toAnemic(): CategoryAnemic {
    return {
      id: this.id,
      parent_id: this.parent_id,
      title: this.getTitle(),
      slug: this.getSlug(),
      active: this.getActive(),
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      deleted_at: this.getDeletedAt(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
      isParent: this.isParent(),
      isChild: this.isChild(),
    };
  }

  updateParentId(parent_id: Nullable<string>): void {
    this.updateUpdatedAt();
    this.parent_id = parent_id;
  }
}
