import { Module } from '@nestjs/common';
import {
  datasourceProvider,
  sizeProvider,
} from '@azkaban/inventory-infrastructure';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';

@Module({
  controllers: [SizeController],
  providers: [...datasourceProvider, ...sizeProvider, SizeService],
})
export class SizeModule {}
