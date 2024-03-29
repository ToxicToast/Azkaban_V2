import { Module } from '@nestjs/common';
import {
  datasourceProvider,
  typeProvider,
} from '@azkaban/inventory-infrastructure';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';

@Module({
  controllers: [TypeController],
  providers: [...datasourceProvider, ...typeProvider, TypeService],
})
export class TypeModule {}
