import { LocationService } from '@azkaban/inventory-domain';
import { LocationTypeORMRepository } from '../repositories';
import { CreateLocationDto } from '../../dtos';
import { LocationDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class LocationTypeOrmService {
  private readonly domainService: LocationService;

  constructor(private readonly repository: LocationTypeORMRepository) {
    this.domainService = new LocationService(repository);
  }

  async createLocation(data: CreateLocationDto): Promise<void> {
    await this.domainService.createLocation(data);
  }

  async getLocationList(): Promise<Array<LocationDao>> {
    return await this.domainService.getLocations();
  }

  async getLocationById(id: string): Promise<Nullable<LocationDao>> {
    return await this.domainService.getLocationById(id);
  }

  async getLocationByTitle(title: string): Promise<Nullable<LocationDao>> {
    return await this.domainService.getLocationByTitle(title);
  }

  async getLocationByParentId(
    parent_id: Nullable<string>
  ): Promise<Array<LocationDao>> {
    return await this.domainService.getLocationByParentId(parent_id);
  }

  async getLocationByFreezer(freezer: boolean): Promise<Array<LocationDao>> {
    return await this.domainService.getLocationByFreezer(freezer);
  }

  async updateLocationParentId(
    id: string,
    parent_id: Nullable<string>
  ): Promise<void> {
    await this.domainService.updateParentId(id, parent_id);
  }

  async updateLocationTitle(id: string, title: string): Promise<void> {
    await this.domainService.updateTitle(id, title);
  }

  async updateLocationSlug(id: string, slug: string): Promise<void> {
    await this.domainService.updateSlug(id, slug);
  }

  async updateLocationFreezer(id: string, freezer: boolean): Promise<void> {
    await this.domainService.updateFreezer(id, freezer);
  }

  async activateLocation(id: string): Promise<void> {
    await this.domainService.activateLocation(id);
  }

  async deactivateLocation(id: string): Promise<void> {
    await this.domainService.deactivateLocation(id);
  }

  async deleteLocation(id: string): Promise<void> {
    await this.domainService.deleteLocation(id);
  }

  async restoreLocation(id: string): Promise<void> {
    await this.domainService.restoreLocation(id);
  }
}
