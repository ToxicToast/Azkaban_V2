import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'ITEM_SERVICE',
        ...clientProvider(Queues.INVENTORY_ITEMS),
      },
    ]),
  ],
  controllers: [ItemController],
  providers: [AuthGuard, GroupsGuard, ItemService],
})
export class ItemModule {}
