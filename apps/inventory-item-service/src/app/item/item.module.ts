import { Module } from '@nestjs/common';
import {
  itemProvider,
  datasourceProvider,
} from '@azkaban/inventory-infrastructure';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
  controllers: [ItemController],
  providers: [...datasourceProvider, ...itemProvider, ItemService],
})
export class ItemModule {}
