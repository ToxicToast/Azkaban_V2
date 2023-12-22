import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { CategoryService } from './category.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CATEGORY_SERVICE',
        ...clientProvider(Queues.INVENTORY),
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
