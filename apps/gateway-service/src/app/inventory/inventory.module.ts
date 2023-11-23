import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    CategoryModule,
    //
    RouterModule.register([
      {
        path: 'inventory',
        children: [
          {
            path: 'category',
            module: CategoryModule,
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
