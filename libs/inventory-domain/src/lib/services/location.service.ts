import { Nullable } from '@azkaban/shared';
import { LocationAnemic } from '../anemics';
import { LocationData } from '../data';
import { LocationFactory } from '../factories';
import { LocationRepository } from '../repositories';

export class LocationService {
  constructor(private readonly repository: LocationRepository) {}

  async save(anemic: LocationAnemic): Promise<void> {
    await this.repository.save(anemic);
  }

  async createLocation(data: LocationData): Promise<void> {
    const factory = new LocationFactory();
    const aggregate = factory.createFactory(data);
    await this.save(aggregate.toAnemic());
  }

  async getLocations(): Promise<Array<LocationAnemic>> {
    return await this.repository.findList();
  }

  async getLocationById(id: string): Promise<Nullable<LocationAnemic>> {
    return await this.repository.findById(id);
  }

  async getLocationByTitle(title: string): Promise<Nullable<LocationAnemic>> {
    return await this.repository.findByTitle(title);
  }

  async getLocationBySlug(slug: string): Promise<Nullable<LocationAnemic>> {
    return await this.repository.findBySlug(slug);
  }

  async getLocationByFreezer(
    isFreezer: boolean
  ): Promise<Array<LocationAnemic>> {
    return await this.repository.findByFreezer(isFreezer);
  }

  async updateParentId(id: string, parent_id: Nullable<string>): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.updateParentId(parent_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateTitle(id: string, title: string): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.updateTitle(title);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.updateSlug(slug);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateFreezer(id: string, freezer: boolean): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.updateFreezer(freezer);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateLocation(id: string): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateLocation(id: string): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteLocation(id: string): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreLocation(id: string): Promise<void> {
    const location = await this.getLocationById(id);
    if (location !== null) {
      const aggregate = new LocationFactory().reconstitute(location);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
