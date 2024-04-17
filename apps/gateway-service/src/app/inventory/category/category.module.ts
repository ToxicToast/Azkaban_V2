import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { CategoryService } from './category.service';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';
import { CategoryWebhookService } from './webhook.service';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'CATEGORY_SERVICE',
        ...clientProvider(Queues.INVENTORY_CATEGORIES),
      },
      {
        name: 'WEBHOOK_SERVICE',
        ...clientProvider(Queues.AZKABAN_WEBHOOK),
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [AuthGuard, GroupsGuard, CategoryService, CategoryWebhookService],
})
export class CategoryModule {}
