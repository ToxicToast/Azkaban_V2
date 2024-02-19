import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { TypeService } from './type.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { TypeController } from './type.controller';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'TYPE_SERVICE',
        ...clientProvider(Queues.INVENTORY_TYPE),
      },
    ]),
  ],
  controllers: [TypeController],
  providers: [AuthGuard, GroupsGuard, TypeService],
})
export class TypeModule {}
