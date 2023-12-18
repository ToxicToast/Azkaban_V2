import { AggregateHelper, Domain, Nullable } from '@azkaban/shared';
import { ItemAnemic } from '../anemics';

interface ItemAggregateHelper {
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class ItemAggregate
  extends AggregateHelper<ItemAggregateHelper>
  implements Domain<ItemAnemic>
{
  constructor(
    private readonly id: string,
    private category_id: Nullable<string>,
    private location_id: Nullable<string>,
    private company_id: Nullable<string>,
    private size_id: Nullable<string>,
    private type_id: Nullable<string>,
    private title: string,
    private slug: string,
    private current_sku: number,
    private min_sku: number,
    private max_sku: number,
    private ean: Nullable<string>,
    private price: Nullable<number>,
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

  isStockAlert(): boolean {
    return this.current_sku <= this.min_sku && this.isActive();
  }

  isOverStocked(): boolean {
    return this.current_sku >= this.max_sku && this.isActive();
  }

  toAnemic(): ItemAnemic {
    return {
      id: this.id,
      category_id: this.category_id,
      location_id: this.location_id,
      company_id: this.company_id,
      size_id: this.size_id,
      type_id: this.type_id,
      title: this.getTitle(),
      slug: this.getSlug(),
      current_sku: this.current_sku,
      min_sku: this.min_sku,
      max_sku: this.max_sku,
      ean: this.ean,
      price: this.price,
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      deleted_at: this.getDeletedAt(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
      isStockAlert: this.isStockAlert(),
      isOverStocked: this.isOverStocked(),
    };
  }

  updateCategoryId(category_id: Nullable<string>): void {
    this.category_id = category_id;
    this.updateUpdatedAt();
  }

  updateLocationId(location_id: Nullable<string>): void {
    this.location_id = location_id;
    this.updateUpdatedAt();
  }

  updateCompanyId(company_id: Nullable<string>): void {
    this.company_id = company_id;
    this.updateUpdatedAt();
  }

  updateSizeId(size_id: Nullable<string>): void {
    this.size_id = size_id;
    this.updateUpdatedAt();
  }

  updateTypeId(type_id: Nullable<string>): void {
    this.type_id = type_id;
    this.updateUpdatedAt();
  }

  updateCurrentSku(current_sku: number): void {
    this.current_sku = current_sku;
    this.updateUpdatedAt();
  }

  updateMinSku(min_sku: number): void {
    this.min_sku = min_sku;
    this.updateUpdatedAt();
  }

  updateMaxSku(max_sku: number): void {
    this.max_sku = max_sku;
    this.updateUpdatedAt();
  }

  updateEAN(ean: Nullable<string>): void {
    this.ean = ean;
    this.updateUpdatedAt();
  }

  updatePrice(price: Nullable<number>): void {
    this.price = price;
    this.updateUpdatedAt();
  }
}
