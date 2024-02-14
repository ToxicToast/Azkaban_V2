import { Module } from '@nestjs/common';
import {
  datasourceProvider,
  typeProvider,
} from '@azkaban/inventory-infrastructure';

@Module({
  controllers: [],
  providers: [...datasourceProvider, ...typeProvider],
})
export class TypeModule {}
