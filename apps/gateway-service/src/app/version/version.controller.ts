import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VersionService } from './version.service';

@ApiTags('versioning')
@Controller()
export class VersionController {
  constructor(private readonly service: VersionService) {}

  @Get()
  async version() {
    const inventory = {
      category: await this.service.categoryVersion(),
      company: await this.service.companyVersion(),
      item: await this.service.itemVersion(),
      itemDetail: '-',
      location: await this.service.locationVersion(),
      size: await this.service.sizeVersion(),
      type: await this.service.typeVersion(),
      warehouse: '-',
    };

    const azkaban = {
      auth: '-',
      user: '-',
      upload: 'v0.3.0',
    };

    const twitch = {
      channel: '-',
      hook: '-',
      message: '-',
      stream: '-',
      user: '-',
      bot: '-',
    };

    return {
      gateway: this.service.gatewayVersion(),
      azkaban,
      inventory,
      twitch,
    };
  }
}
