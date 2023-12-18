import { Nullable } from '@azkaban/shared';
import { ItemAnemic } from '../anemics';
import { ItemData } from '../data';
import { ItemFactory } from '../factories';
import { ItemRepository } from '../repositories';
export class ItemService {
  constructor(private readonly repository: ItemRepository) {}

  async save(anemic: ItemAnemic): Promise<void> {
    await this.repository.save(anemic);
  }

  async createItem(data: ItemData): Promise<void> {
    const factory = new ItemFactory();
    const aggregate = factory.createFactory(data);
    await this.save(aggregate.toAnemic());
  }

  async getItems(): Promise<Array<ItemAnemic>> {
    return await this.repository.findList();
  }

  async getItemById(id: string): Promise<Nullable<ItemAnemic>> {
    return await this.repository.findById(id);
  }

  async getItemByTitle(title: string): Promise<Nullable<ItemAnemic>> {
    return await this.repository.findByTitle(title);
  }

  async getItemByCategoryId(
    category_id: Nullable<string>
  ): Promise<Array<ItemAnemic>> {
    return await this.repository.findByCategoryId(category_id);
  }

  async getItemByCompanyId(
    company_id: Nullable<string>
  ): Promise<Array<ItemAnemic>> {
    return await this.repository.findByCompanyId(company_id);
  }

  async getItemByLocationId(
    location_id: Nullable<string>
  ): Promise<Array<ItemAnemic>> {
    return await this.repository.findByLocationId(location_id);
  }

  async getItemBySizeId(size_id: Nullable<string>): Promise<Array<ItemAnemic>> {
    return await this.repository.findBySizeId(size_id);
  }

  async getItemByTypeId(type_id: Nullable<string>): Promise<Array<ItemAnemic>> {
    return await this.repository.findByTypeId(type_id);
  }

  async updateCategoryId(
    id: string,
    category_id: Nullable<string>
  ): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateCategoryId(category_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateCompanyId(
    id: string,
    company_id: Nullable<string>
  ): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateCompanyId(company_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateLocationId(
    id: string,
    location_id: Nullable<string>
  ): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateLocationId(location_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSizeId(id: string, size_id: Nullable<string>): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateSizeId(size_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateTypeId(id: string, type_id: Nullable<string>): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateTypeId(type_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateTitle(id: string, title: string): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateTitle(title);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.updateSlug(slug);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateItem(id: string): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateItem(id: string): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteItem(id: string): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreItem(id: string): Promise<void> {
    const item = await this.getItemById(id);
    if (item !== null) {
      const aggregate = new ItemFactory().reconstitute(item);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
