import { Nullable } from '@azkaban/shared';
import { SizeAnemic } from '../anemics';
import { SizeData } from '../data';
import { SizeFactory } from '../factories';
import { SizeRepository } from '../repositories';

export class SizeService {
  constructor(private readonly repository: SizeRepository) {}

  async save(anemic: SizeAnemic): Promise<void> {
    await this.repository.save(anemic);
  }

  async createSize(data: SizeData): Promise<void> {
    const factory = new SizeFactory();
    const aggregate = factory.createFactory(data);
    await this.save(aggregate.toAnemic());
  }

  async getSizes(): Promise<Array<SizeAnemic>> {
    return await this.repository.findList();
  }

  async getSizeById(id: string): Promise<Nullable<SizeAnemic>> {
    return await this.repository.findById(id);
  }

  async getLocationByTitle(title: string): Promise<Nullable<SizeAnemic>> {
    return await this.repository.findByTitle(title);
  }

  async getLocationBySlug(slug: string): Promise<Nullable<SizeAnemic>> {
    return await this.repository.findBySlug(slug);
  }

  async updateTitle(id: string, title: string): Promise<void> {
    const size = await this.getSizeById(id);
    if (size !== null) {
      const aggregate = new SizeFactory().reconstitute(size);
      aggregate.updateTitle(title);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    const size = await this.getSizeById(id);
    if (size !== null) {
      const aggregate = new SizeFactory().reconstitute(size);
      aggregate.updateSlug(slug);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateSize(id: string): Promise<void> {
    const size = await this.getSizeById(id);
    if (size !== null) {
      const aggregate = new SizeFactory().reconstitute(size);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateSize(id: string): Promise<void> {
    const size = await this.getSizeById(id);
    if (size !== null) {
      const aggregate = new SizeFactory().reconstitute(size);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteSize(id: string): Promise<void> {
    const size = await this.getSizeById(id);
    if (size !== null) {
      const aggregate = new SizeFactory().reconstitute(size);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreSize(id: string): Promise<void> {
    const size = await this.getSizeById(id);
    if (size !== null) {
      const aggregate = new SizeFactory().reconstitute(size);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
