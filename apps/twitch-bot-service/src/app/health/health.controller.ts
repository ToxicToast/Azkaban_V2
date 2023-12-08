import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MemoryHealthIndicator,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import * as process from 'process';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('monitoring')
@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly http: HttpHealthIndicator
  ) {}

  private checkHeap(heapThreshold: number) {
    return [() => this.memory.checkHeap('memory_heap', heapThreshold)];
  }

  private checkRss(rssThreshold: number) {
    return [() => this.memory.checkRSS('memory_rss', rssThreshold)];
  }

  private checkGateway(gatewayPath: string) {
    return [() => this.http.pingCheck('gateway', gatewayPath)];
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      ...this.checkHeap(Number(process.env.MEMORY_HEAP_TRESHOLD)),
      ...this.checkRss(Number(process.env.MEMORY_RSS_TRESHOLD)),
      ...this.checkGateway(String(process.env.GATEWAY_URL + '/health')),
    ]);
  }
}
