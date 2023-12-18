import { Nullable } from '@azkaban/shared';
import { TypeAnemic } from '../anemics';
import { TypeData } from '../data';
import { TypeFactory } from '../factories';
import { TypeRepository } from '../repositories';

export class TypeService {
  constructor(private readonly repository: TypeRepository) {}

  async save(anemic: TypeAnemic): Promise<void> {
    await this.repository.save(anemic);
  }

  async createType(data: TypeData): Promise<void> {
    const factory = new TypeFactory();
    const aggregate = factory.createFactory(data);
    await this.save(aggregate.toAnemic());
  }

  async getTypes(): Promise<Array<TypeAnemic>> {
    return await this.repository.findList();
  }

  async getTypeById(id: string): Promise<Nullable<TypeAnemic>> {
    return await this.repository.findById(id);
  }

  async getTypeByTitle(title: string): Promise<Nullable<TypeAnemic>> {
    return await this.repository.findByTitle(title);
  }

  async updateTitle(id: string, title: string): Promise<void> {
    const size = await this.getTypeById(id);
    if (size !== null) {
      const aggregate = new TypeFactory().reconstitute(size);
      aggregate.updateTitle(title);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    const size = await this.getTypeById(id);
    if (size !== null) {
      const aggregate = new TypeFactory().reconstitute(size);
      aggregate.updateSlug(slug);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateType(id: string): Promise<void> {
    const size = await this.getTypeById(id);
    if (size !== null) {
      const aggregate = new TypeFactory().reconstitute(size);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateType(id: string): Promise<void> {
    const size = await this.getTypeById(id);
    if (size !== null) {
      const aggregate = new TypeFactory().reconstitute(size);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteType(id: string): Promise<void> {
    const size = await this.getTypeById(id);
    if (size !== null) {
      const aggregate = new TypeFactory().reconstitute(size);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreType(id: string): Promise<void> {
    const size = await this.getTypeById(id);
    if (size !== null) {
      const aggregate = new TypeFactory().reconstitute(size);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
