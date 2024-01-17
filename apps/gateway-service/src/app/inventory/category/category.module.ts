import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { CategoryService } from './category.service';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule,
    ClientsModule.register([
      {
        name: 'CATEGORY_SERVICE',
        ...clientProvider(Queues.INVENTORY_CATEGORIES),
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [AuthGuard, GroupsGuard, CategoryService],
})
export class CategoryModule {}
