import { Module } from '@nestjs/common';
import { VersionController } from './version.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { VersionService } from './version.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY_SERVICE',
        ...clientProvider(Queues.AZKABAN_INVENTORY),
      },
    ]),
  ],
  controllers: [VersionController],
  providers: [VersionService],
})
export class VersionModule {}
