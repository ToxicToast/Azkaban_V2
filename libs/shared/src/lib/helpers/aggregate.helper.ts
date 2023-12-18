import { Nullable } from '../types';

interface AnemicHelper {
  readonly created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class AggregateHelper<Anemic extends AnemicHelper> {
  constructor(private readonly data: Anemic) {}

  isUpdated(): boolean {
    return !!this.data.updated_at;
  }

  isDeleted(): boolean {
    return !!this.data.deleted_at;
  }

  isActive(): boolean {
    return this.data.active && !this.isDeleted();
  }

  activate(): void {
    if (this.isActive()) {
      // throw new ActivateException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.data.active = true;
  }

  deactivate(): void {
    if (!this.isActive()) {
      // throw new DeactivateException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.data.active = false;
  }

  delete(): void {
    if (this.isDeleted()) {
      // throw new DeleteException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.data.deleted_at = new Date();
  }

  restore(): void {
    if (!this.isDeleted()) {
      // throw new RestoreException(CategoryAggregate.name);
      return;
    }
    this.updateUpdatedAt();
    this.data.deleted_at = null;
  }

  updateTitle(title: string): void {
    this.updateUpdatedAt();
    this.data.title = title;
  }

  updateSlug(slug: string): void {
    this.updateUpdatedAt();
    this.data.slug = slug;
  }

  protected updateUpdatedAt(): void {
    this.data.updated_at = new Date();
  }

  protected getCreatedAt(): Date {
    return this.data.created_at;
  }

  protected getUpdatedAt(): Nullable<Date> {
    return this.data.updated_at;
  }

  protected getDeletedAt(): Nullable<Date> {
    return this.data.deleted_at;
  }

  protected getTitle(): string {
    return this.data.title;
  }

  protected getSlug(): string {
    return this.data.slug;
  }

  protected getActive(): boolean {
    return this.data.active;
  }
}
