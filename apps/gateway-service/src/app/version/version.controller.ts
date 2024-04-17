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
      company: '',
      item: '',
      itemDetail: '',
      location: '',
      size: '',
      type: '',
      warehouse: '',
    };

    const azkaban = {
      auth: '',
      upload: '',
    };

    const twitch = {
      channel: '',
      hook: '',
      message: '',
      stream: '',
      user: '',
    };

    return {
      gateway: this.service.gatewayVersion(),
      azkaban,
      inventory,
      twitch,
    };
  }
}
