import { Module } from '@nestjs/common';
import { VersionController } from './version.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { VersionService } from './version.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INV_CATEGORY_SERVICE',
        ...clientProvider(Queues.INVENTORY_CATEGORIES),
      },
      {
        name: 'INV_COMPANY_SERVICE',
        ...clientProvider(Queues.INVENTORY_COMPANIES),
      },
      {
        name: 'INV_ITEM_SERVICE',
        ...clientProvider(Queues.INVENTORY_ITEMS),
      },
      {
        name: 'INV_LOCATION_SERVICE',
        ...clientProvider(Queues.INVENTORY_LOCATION),
      },
      {
        name: 'INV_SIZE_SERVICE',
        ...clientProvider(Queues.INVENTORY_SIZE),
      },
      {
        name: 'INV_TYPE_SERVICE',
        ...clientProvider(Queues.INVENTORY_TYPE),
      },
    ]),
  ],
  controllers: [VersionController],
  providers: [VersionService],
})
export class VersionModule {}
