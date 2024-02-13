import { Module } from '@nestjs/common';
import {
  datasourceProvider,
  locationProvider,
} from '@azkaban/inventory-infrastructure';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';

@Module({
  controllers: [LocationController],
  providers: [...datasourceProvider, ...locationProvider, LocationService],
})
export class LocationModule {}
