import { Module } from '@nestjs/common';
import {
  companyProvider,
  datasourceProvider,
} from '@azkaban/inventory-infrastructure';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  controllers: [CompanyController],
  providers: [...datasourceProvider, ...companyProvider, CompanyService],
})
export class CompanyModule {}
