import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'SIZE_SERVICE',
        ...clientProvider(Queues.INVENTORY_SIZE),
      },
    ]),
  ],
  controllers: [SizeController],
  providers: [AuthGuard, GroupsGuard, SizeService],
})
export class SizeModule {}
