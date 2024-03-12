import { Nullable } from '@azkaban/shared';
import { ItemDetailAnemic } from '../anemics';
import { ItemDetailData } from '../data';
import { ItemDetailFactory } from '../factories';
import { ItemDetailRepository } from '../repositories';

export class ItemDetailService {
  constructor(private readonly repository: ItemDetailRepository) {}

  async save(anemic: ItemDetailAnemic): Promise<ItemDetailAnemic> {
    return await this.repository.save(anemic);
  }

  async createItemDetail(data: ItemDetailData): Promise<ItemDetailAnemic> {
    const factory = new ItemDetailFactory();
    const aggregate = factory.createFactory(data);
    return await this.save(aggregate.toAnemic());
  }

  async getItemDetails(): Promise<Array<ItemDetailAnemic>> {
    return await this.repository.findList();
  }

  async getItemDetailById(id: string): Promise<Nullable<ItemDetailAnemic>> {
    return await this.repository.findById(id);
  }

  async getItemDetailByItemId(
    item_id: string,
  ): Promise<Array<ItemDetailAnemic>> {
    return await this.repository.findByItemId(item_id);
  }

  async updateItemId(id: string, item_id: string): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.updateItemId(item_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updatePurchaseDate(id: string, purchase_date: Date): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.updatePurchaseDate(purchase_date);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateExpirationDate(
    id: string,
    expiration_date: Nullable<Date>,
  ): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.updateExpirationDate(expiration_date);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateOpeningDate(
    id: string,
    opening_date: Nullable<Date>,
  ): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.updateOpeningDate(opening_date);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateReturnable(id: string, returnable: boolean): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.updateReturnable(returnable);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateItemDetail(id: string): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateItemDetail(id: string): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteItemDetail(id: string): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreItemDetail(id: string): Promise<void> {
    const itemDetail = await this.getItemDetailById(id);
    if (itemDetail) {
      const aggregate = new ItemDetailFactory().reconstitute(itemDetail);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
