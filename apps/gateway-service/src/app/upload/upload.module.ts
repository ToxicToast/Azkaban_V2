import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { HttpModule } from '@nestjs/axios';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import { AuthGuard } from '../../guard/auth.guard';
import { GroupsGuard } from '../../guard/groups.guard';
import { ReceipeController } from './receipe.controller';
import { ReceipeService } from './receipe.service';

@Module({
  imports: [
    HttpModule,
    MulterModule.register({
      dest: path.join(__dirname, './assets/uploads'),
    }),
    JwtModule,
    ClientsModule.register([
      {
        name: 'RECEIPE_SERVICE',
        ...clientProvider(Queues.INVENTORY_RECEIPE),
      },
    ]),
  ],
  controllers: [ReceipeController],
  providers: [AuthGuard, GroupsGuard, ReceipeService],
})
export class UploadModule {}
