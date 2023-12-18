import { Module } from '@nestjs/common';
import {
  categoryProvider,
  datasourceProvider,
} from '@azkaban/inventory-infrastructure';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [...datasourceProvider, ...categoryProvider, CategoryService],
})
export class CategoryModule {}
