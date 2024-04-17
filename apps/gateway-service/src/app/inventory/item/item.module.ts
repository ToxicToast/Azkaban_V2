import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { ItemWebhookService } from './webhook.service';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'ITEM_SERVICE',
        ...clientProvider(Queues.AZKABAN_INVENTORY),
      },
      {
        name: 'WEBHOOK_SERVICE',
        ...clientProvider(Queues.AZKABAN_WEBHOOK),
      },
    ]),
  ],
  controllers: [ItemController],
  providers: [AuthGuard, GroupsGuard, ItemService, ItemWebhookService],
})
export class ItemModule {}
