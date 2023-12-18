import { Anemic, Nullable } from '@azkaban/shared';

export interface ItemAnemic extends Anemic {
  readonly category_id: Nullable<string>;
  readonly location_id: Nullable<string>;
  readonly company_id: Nullable<string>;
  readonly size_id: Nullable<string>;
  readonly type_id: Nullable<string>;
  readonly title: string;
  readonly slug: string;
  readonly current_sku: number;
  readonly min_sku: number;
  readonly max_sku: number;
  readonly ean: Nullable<string>;
  readonly price: Nullable<number>;
  readonly isStockAlert: boolean;
  readonly isOverStocked: boolean;
}
