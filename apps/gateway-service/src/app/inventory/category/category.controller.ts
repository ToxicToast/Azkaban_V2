import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('inventory')
export class CategoryController {
  constructor() {}

  @Get()
  async getCategoriesList(): Promise<Array<any>> {
    return [];
  }

  @Get(':id')
  async getCategoriesById(@Param('id') id: string): Promise<any> {
    return {
      id,
    };
  }

  @Post()
  async createCategory(): Promise<void> {
    // DO NOTHING
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() category: any
  ): Promise<void> {
    // DO NOTHING
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    // DO NOTHING
  }
}
