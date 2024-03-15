import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CategoryModule } from './category/category.module';
import { CompanyModule } from './company/company.module';
import { ItemModule } from './item/item.module';
import { ItemDetailModule } from './item-detail/item-detail.module';
import { LocationModule } from './location/location.module';
import { SizeModule } from './size/size.module';
import { TypeModule } from './type/type.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [
    CategoryModule,
    CompanyModule,
    ItemModule,
    ItemDetailModule,
    LocationModule,
    SizeModule,
    TypeModule,
    //
    RouterModule.register([
      {
        path: 'inventory',
        children: [
          {
            path: 'category',
            module: CategoryModule,
          },
          {
            path: 'company',
            module: CompanyModule,
          },
          {
            path: 'item',
            module: ItemModule,
          },
          {
            path: 'itemdetail',
            module: ItemDetailModule,
          },
          {
            path: 'location',
            module: LocationModule,
          },
          {
            path: 'size',
            module: SizeModule,
          },
          {
            path: 'type',
            module: TypeModule,
          },
          {
            path: 'warehouse',
            module: WarehouseModule,
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
