import { Domain, Nullable } from '@azkaban/shared';
import { CategoryAnemic } from '../anemics';

export class CategoryAggregate implements Domain<CategoryAnemic> {
  constructor(
    private readonly id: string,
    private parent_id: Nullable<string>,
    private title: string,
    private slug: string,
    private active: boolean,
    private readonly created_at: Date,
    private updated_at: Nullable<Date>,
    private deleted_at: Nullable<Date>
  ) {}

  isUpdated(): boolean {
    return !!this.updated_at;
  }

  isDeleted(): boolean {
    return !!this.deleted_at;
  }

  isActive(): boolean {
    return this.active && !this.isDeleted();
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
      title: this.title,
      slug: this.slug,
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
      isParent: this.isParent(),
      isChild: this.isChild(),
    };
  }

  activate(): void {
    if (this.isActive()) {
      // throw new ActivateException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.active = true;
  }

  deactivate(): void {
    if (!this.isActive()) {
      // throw new DeactivateException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.active = false;
  }

  delete(): void {
    if (this.isDeleted()) {
      // throw new DeleteException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.deleted_at = new Date();
  }

  restore(): void {
    if (!this.isDeleted()) {
      // throw new RestoreException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.deleted_at = null;
  }

  updateParentId(parent_id: Nullable<string>): void {
    this.updateUpdatedAt();
    this.parent_id = parent_id;
  }

  updateTitle(title: string): void {
    this.updateUpdatedAt();
    this.title = title;
  }

  updateSlug(slug: string): void {
    this.updateUpdatedAt();
    this.slug = slug;
  }

  private updateUpdatedAt(): void {
    this.updated_at = new Date();
  }
}
