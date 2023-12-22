import { Controller, Get, Res } from '@nestjs/common';
import { PrometheusController } from '@willsoto/nestjs-prometheus';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('monitoring')
@Controller()
export class MetricsController extends PrometheusController {
  @Get()
  index(@Res({ passthrough: true }) response: Response) {
    return super.index(response);
  }
}
