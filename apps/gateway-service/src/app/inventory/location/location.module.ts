import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { ItemService } from '../item/item.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { LocationController } from './location.controller';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'LOCATION_SERVICE',
        ...clientProvider(Queues.INVENTORY_LOCATION),
      },
    ]),
  ],
  controllers: [LocationController],
  providers: [AuthGuard, GroupsGuard, ItemService],
})
export class LocationModule {}
