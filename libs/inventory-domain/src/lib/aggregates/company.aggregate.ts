import { Domain, Nullable } from '@azkaban/shared';
import { CompanyAnemic } from '../anemics';

export class CompanyAggregate implements Domain<CompanyAnemic> {
  constructor(
    private readonly id: string,
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

  toAnemic(): CompanyAnemic {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
    };
  }

  activate(): void {
    if (this.isActive()) {
      return;
    }
    this.updateUpdatedAt();
    this.active = true;
  }

  deactivate(): void {
    if (!this.isActive()) {
      return;
    }
    this.updateUpdatedAt();
    this.active = false;
  }

  delete(): void {
    if (this.isDeleted()) {
      return;
    }
    this.updateUpdatedAt();
    this.deleted_at = new Date();
  }

  restore(): void {
    if (!this.isDeleted()) {
      return;
    }
    this.updateUpdatedAt();
    this.deleted_at = null;
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
