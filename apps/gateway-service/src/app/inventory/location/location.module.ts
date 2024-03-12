import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { LocationService } from './location.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { LocationController } from './location.controller';
import { LocationWebhookService } from './webhook.service';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'LOCATION_SERVICE',
        ...clientProvider(Queues.INVENTORY_LOCATION),
      },
      {
        name: 'WEBHOOK_SERVICE',
        ...clientProvider(Queues.AZKABAN_WEBHOOK),
      },
    ]),
  ],
  controllers: [LocationController],
  providers: [AuthGuard, GroupsGuard, LocationService, LocationWebhookService],
})
export class LocationModule {}
