import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { CompanyWebhookService } from './webhook.service';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'COMPANY_SERVICE',
        ...clientProvider(Queues.INVENTORY_COMPANIES),
      },
      {
        name: 'WEBHOOK_SERVICE',
        ...clientProvider(Queues.AZKABAN_WEBHOOK),
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [AuthGuard, GroupsGuard, CompanyService, CompanyWebhookService],
})
export class CompanyModule {}
