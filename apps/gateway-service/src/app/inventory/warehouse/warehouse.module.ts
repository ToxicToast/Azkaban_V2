import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'WAREHOUSE_SERVICE',
        ...clientProvider(Queues.AZKABAN_INVENTORY),
      },
      {
        name: 'WEBHOOK_SERVICE',
        ...clientProvider(Queues.AZKABAN_WEBHOOK),
      },
    ]),
  ],
  controllers: [],
  providers: [AuthGuard, GroupsGuard],
})
export class WarehouseModule {}
