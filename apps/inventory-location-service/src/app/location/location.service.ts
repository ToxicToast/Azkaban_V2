import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  LocationDao,
  LocationTypeORMEntity,
  LocationTypeORMRepository,
  LocationTypeOrmService,
  CreateLocationDto,
  UpdateLocationDto,
} from '@azkaban/inventory-infrastructure';

@Injectable()
export class LocationService {
  private readonly infrastructureRepository: LocationTypeORMRepository;
  private readonly infrastructureService: LocationTypeOrmService;

  constructor(
    @Inject('LOCATION_REPOSITORY')
    private readonly locationRepository: Repository<LocationTypeORMEntity>,
  ) {
    this.infrastructureRepository = new LocationTypeORMRepository(
      this.locationRepository,
    );
    this.infrastructureService = new LocationTypeOrmService(
      this.infrastructureRepository,
    );
  }

  async getList(): Promise<Array<LocationDao>> {
    return await this.infrastructureService.getLocationList();
  }

  async getById(id: string): Promise<LocationDao> {
    return await this.infrastructureService.getLocationById(id);
  }

  async createLocation(data: CreateLocationDto): Promise<LocationDao> {
    return await this.infrastructureService.createLocation(data);
  }

  async updateLocation(id: string, data: UpdateLocationDto): Promise<void> {
    if (data.title) {
      await this.infrastructureService.updateLocationTitle(id, data.title);
    } else if (data.slug) {
      await this.infrastructureService.updateLocationSlug(id, data.slug);
    }
  }

  async activateLocation(id: string): Promise<void> {
    await this.infrastructureService.activateLocation(id);
  }

  async deactivateLocation(id: string): Promise<void> {
    await this.infrastructureService.deactivateLocation(id);
  }

  async deleteLocation(id: string): Promise<void> {
    await this.infrastructureService.deleteLocation(id);
  }

  async restoreLocation(id: string): Promise<void> {
    await this.infrastructureService.restoreLocation(id);
  }

  getVersion(): string {
    return process.env.APP_VERSION ?? 'local';
  }
}
